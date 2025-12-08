--  Total Sales per Month
-- Purpose: Show month‑over‑month revenue
SELECT 
  DATE_FORMAT(order_date, '%Y-%m') AS month, 
  ROUND(SUM(total_amount), 2) AS revenue
FROM orders
GROUP BY month;

--  Products Sold per Category
-- Purpose: Aggregate total quantity sold by product category
SELECT 
  c.name AS category, 
  SUM(oi.quantity) AS total_sold
FROM order_items oi
JOIN products p  ON oi.product_id = p.product_id
JOIN categories c ON p.category_id = c.category_id
GROUP BY c.category_id, c.name;

--  Average Order Value per Customer
-- Purpose: Compute each customer’s mean spend per order
SELECT 
  customer_id, 
  ROUND(AVG(total_amount), 2) AS avg_order_value
FROM orders
GROUP BY customer_id;

--  Customers with Above‑Average Order Counts
-- Purpose: Find customers who place more orders than the site‑wide average
SELECT 
  customer_id, 
  total_orders
FROM (
  SELECT 
    customer_id, 
    COUNT(*) AS total_orders
  FROM orders
  GROUP BY customer_id
) AS t
WHERE total_orders > (
  SELECT AVG(order_count)
  FROM (
    SELECT COUNT(*) AS order_count
    FROM orders
    GROUP BY customer_id
  ) AS sq
);

--  Products Never Sold
-- Purpose: Identify items that have never appeared in an order
SELECT 
  product_id, 
  name
FROM products
WHERE product_id NOT IN (
  SELECT DISTINCT product_id 
  FROM order_items
);

--  Orders Exceeding the Average Order Amount
-- Purpose: List orders whose total is above the overall mean
SELECT 
  order_id, 
  total_amount
FROM orders
WHERE total_amount > (
  SELECT AVG(total_amount) 
  FROM orders
);

--  Top 5 Categories by Revenue
-- Purpose: Rank product categories by sales dollars
SELECT 
  c.name      AS category, 
  SUM(oi.quantity * oi.unit_price) AS revenue
FROM order_items oi
JOIN products p  ON oi.product_id = p.product_id
JOIN categories c ON p.category_id = c.category_id
GROUP BY c.category_id, c.name
ORDER BY revenue DESC
LIMIT 5;

--  Monthly Return Rate
-- Purpose: Compute the percentage of returned orders each month
SELECT 
  month,
  ROUND( SUM(is_returned) / COUNT(*) * 100, 2 ) AS return_rate_pct
FROM (
  SELECT 
    DATE_FORMAT(order_date, '%Y-%m') AS month,
    (status = 'Returned') AS is_returned
  FROM orders
) AS sub
GROUP BY month;

--  Latest Order Date per Customer (Correlated Subquery)
-- Purpose: For each customer, fetch the date of their most recent purchase
SELECT 
  c.customer_id, 
  c.first_name, 
  c.last_name,
  (
    SELECT MAX(o.order_date)
    FROM orders o
    WHERE o.customer_id = c.customer_id
  ) AS last_order_date
FROM customers c;

--  Identify Duplicate Emails
-- Purpose: Spot customers sharing the same email address
SELECT 
  email, 
  COUNT(*) AS occurrences
FROM customers
GROUP BY email
HAVING occurrences > 1;
