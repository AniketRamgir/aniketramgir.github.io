-- Advanced Analytical Queries

-- Total sales per month
-- ------------
-- Month-on-month revenue
SELECT DATE_FORMAT(order_date, '%Y-%m') AS month,
       ROUND(SUM(total_amount),2) AS revenue
FROM orders
GROUP BY month
ORDER BY month;

-- Top 10 selling products by quantity
-- ------------
SELECT p.product_id,p.name,
       SUM(oi.quantity) AS total_qty_sold
FROM order_items oi
JOIN products p USING(product_id)
GROUP BY p.product_id,p.name
ORDER BY total_qty_sold DESC
LIMIT 10;

-- Customer RFM (Recency, Frequency, Monetary)
-- ------------
WITH last_order AS (
  SELECT customer_id, MAX(order_date) AS last_date
  FROM orders
  GROUP BY customer_id
),
freq AS (
  SELECT customer_id, COUNT(*) AS freq
  FROM orders
  GROUP BY customer_id
),
monetary AS (
  SELECT customer_id, SUM(total_amount) AS monetary_value
  FROM orders
  GROUP BY customer_id
)
SELECT c.customer_id,
       DATEDIFF(CURRENT_DATE, lo.last_date) AS recency,
       f.freq,
       m.monetary_value
FROM customers c
LEFT JOIN last_order lo ON c.customer_id=lo.customer_id
LEFT JOIN freq f ON c.customer_id=f.customer_id
LEFT JOIN monetary m ON c.customer_id=m.customer_id
ORDER BY monetary_value DESC
LIMIT 20;

-- Cohort Analysis (Customer Acquisition & Retention)
-- ------------
WITH cohorts AS (
  SELECT customer_id,
         DATE_FORMAT(MIN(order_date),'%Y-%m') AS cohort_month
  FROM orders
  GROUP BY customer_id
)
SELECT c.cohort_month,
       DATE_FORMAT(o.order_date,'%Y-%m') AS activity_month,
       COUNT(DISTINCT o.customer_id) AS active_customers
FROM orders o
JOIN cohorts c ON o.customer_id=c.customer_id
GROUP BY c.cohort_month, activity_month
ORDER BY c.cohort_month, activity_month;

-- Promotion Effectiveness
-- ------------
SELECT pr.promo_code,
       COUNT(o.order_id)     AS num_orders,
       ROUND(SUM(o.total_amount),2) AS revenue
FROM orders o
JOIN promotions pr ON o.promo_id=pr.promotion_id
GROUP BY pr.promo_code;

-- Average shipping time
-- ------------
SELECT ROUND(AVG(DATEDIFF(s.delivery_date, s.shipped_date)),2) AS avg_days_to_deliver
FROM shipments s;

-- Return Rate
-- ------------
SELECT status,
       COUNT(*) AS count_orders,
       ROUND(COUNT(*)/(SELECT COUNT(*) FROM orders)*100,2) AS pct_of_total
FROM orders
GROUP BY status;

--  Running Total of Monthly Revenue
-- Purpose: Compute a cumulative sum of sales month‑over‑month
SELECT
  month,
  revenue,
  SUM(revenue) OVER (ORDER BY month) AS cumulative_revenue
FROM (
  SELECT
    DATE_FORMAT(order_date, '%Y-%m') AS month,
    ROUND(SUM(total_amount), 2)  AS revenue
  FROM orders
  GROUP BY month
) AS monthly_sales;

--  Order Sequence per Customer
-- Purpose: Number each customer’s orders in chronological order
SELECT
  order_id,
  customer_id,
  order_date,
  ROW_NUMBER() OVER (
    PARTITION BY customer_id
    ORDER BY order_date
  ) AS order_seq
FROM orders;
