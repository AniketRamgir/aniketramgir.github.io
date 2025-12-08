-- Data Cleaning
SET SQL_SAFE_UPDATES = 0;
-- Trim Leading/Trailing Whitespace (Customer Names)
UPDATE customers
SET first_name = TRIM(first_name),
    last_name  = TRIM(last_name)
WHERE first_name LIKE ' %'
   OR first_name LIKE '% '
   OR last_name  LIKE ' %'
   OR last_name  LIKE '% ';

--  Normalize Email to Lowercase
UPDATE customers
SET email = LOWER(email)
WHERE email <> LOWER(email);

-- 3. Delete Exact Duplicate Customers (keep lowest customer_id per email)
DELETE c1
FROM customers c1
JOIN customers c2
  ON c1.email = c2.email
 AND c1.customer_id > c2.customer_id;

--  Remove Orphaned Order Items (order_id no longer exists)
DELETE oi
FROM order_items oi
LEFT JOIN orders o ON oi.order_id = o.order_id
WHERE o.order_id IS NULL;

-- 5. Fix Negative or Zero Prices (set to NULL for review)
UPDATE products
SET price = NULL
WHERE price <= 0;

--  Fill Missing Promo IDs (use default 0 = “no promo”)
UPDATE orders
SET promo_id = 0
WHERE promo_id IS NULL;

--  Clamp Order Dates into Valid Range (2024‑01‑01 to 2024‑04‑30)
UPDATE orders
SET order_date = GREATEST(
                    LEAST(order_date, '2024-04-30'),
                    '2024-01-01'
                  );

--  Standardize Status Values (correct casing & typos)
UPDATE orders
SET status =
  CASE
    WHEN LOWER(status) = 'pending'   THEN 'Pending'
    WHEN LOWER(status) = 'shipped'   THEN 'Shipped'
    WHEN LOWER(status) = 'delivered' THEN 'Delivered'
    WHEN LOWER(status) = 'returned'  THEN 'Returned'
    ELSE 'Pending'
  END;

--  Remove Implausible Birthdates (age <13 or >100)
DELETE FROM customers
WHERE TIMESTAMPDIFF(YEAR, date_of_birth, CURDATE()) NOT BETWEEN 13 AND 100;
