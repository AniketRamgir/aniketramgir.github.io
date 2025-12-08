--  Inner Join: Retrieve Orders with Customer Details
-- Purpose: Show only orders that have matching customer records
SELECT 
  o.order_id, 
  c.first_name, 
  c.last_name, 
  o.order_date
FROM orders o
INNER JOIN customers c 
  ON o.customer_id = c.customer_id;

--  Inner Join: List Order Items with Product Names
-- Purpose: Combine order_items and products to get product names per line item
SELECT 
  oi.order_item_id, 
  oi.order_id, 
  p.name AS product_name, 
  oi.quantity
FROM order_items oi
INNER JOIN products p 
  ON oi.product_id = p.product_id;

--  Inner Join: Show Orders with Active Promotion Info
-- Purpose: Display only orders that used a promo, along with discount details
SELECT 
  o.order_id, 
  o.total_amount, 
  pr.promo_code, 
  pr.discount_pct
FROM orders o
INNER JOIN promotions pr 
  ON o.promo_id = pr.promotion_id;

--  Left Join: List All Customers and Their Orders (if any)
-- Purpose: Include customers who haven’t placed any orders yet
SELECT 
  c.customer_id, 
  c.first_name, 
  c.last_name, 
  o.order_id, 
  o.order_date
FROM customers c
LEFT JOIN orders o 
  ON c.customer_id = o.customer_id;

--  Left Join: List All Products and Any Sold Quantity
-- Purpose: Show every product and total sold (NULL for unsold)
SELECT 
  p.product_id, 
  p.name, 
  SUM(oi.quantity) AS sold_qty
FROM products p
LEFT JOIN order_items oi 
  ON p.product_id = oi.product_id
GROUP BY p.product_id, p.name;

--  Left Join: Show All Orders with Shipment Status
-- Purpose: Include orders that haven’t shipped yet
SELECT 
  o.order_id, 
  o.status, 
  s.shipped_date, 
  s.delivery_date
FROM orders o
LEFT JOIN shipments s 
  ON o.order_id = s.order_id;

--  Right Join: Show All Shipments and Their Orders
-- Purpose: Include shipments even if the order record is missing
SELECT 
  o.order_id, 
  s.shipment_id, 
  s.carrier, 
  s.delivery_date
FROM orders o
RIGHT JOIN shipments s 
  ON o.order_id = s.order_id;

--  Right Join: List All Categories and Their Products (if any)
-- Purpose: Show every category, even those with no products
SELECT 
  c.category_id, 
  c.name AS category_name, 
  p.product_id
FROM products p
RIGHT JOIN categories c 
  ON p.category_id = c.category_id;

--  Self Join: Find Customers Sharing the Same Last Name
-- Purpose: Identify pairs of different customers with identical last names
SELECT 
  c1.customer_id   AS cust1_id, 
  c1.first_name    AS cust1_fname,
  c2.customer_id   AS cust2_id, 
  c2.first_name    AS cust2_fname,
  c1.last_name
FROM customers c1
INNER JOIN customers c2 
  ON c1.last_name = c2.last_name 
 AND c1.customer_id < c2.customer_id;

--  Self Join: Compare Each Customer’s First and Last Orders
-- Purpose: For each customer, show their earliest and latest order IDs
SELECT 
  o1.customer_id, 
  o1.order_id AS first_order_id, 
  o2.order_id AS last_order_id
FROM orders o1
INNER JOIN orders o2 
  ON o1.customer_id = o2.customer_id
WHERE o1.order_date = (
        SELECT MIN(order_date) 
        FROM orders 
        WHERE customer_id = o1.customer_id
      )
  AND o2.order_date = (
        SELECT MAX(order_date) 
        FROM orders 
        WHERE customer_id = o1.customer_id
      );
