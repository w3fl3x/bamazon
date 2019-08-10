DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) default 0,
    stock_quantity INTEGER(10) default 0,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
	('Hot Wheels', 'Toys', 1.00, 275),
    ('Cinnamon Toast Crunch', 'Food', 3.50, 200),
    ('Beef Jerky', 'Food', 7.00, 300),
    ('Sunglasses', 'Fashion', 250, 50),
    ('Hand Soap', 'Personal Care', 5.50, 70),
    ('Socks', 'Fashion', 3.25, 83),
    ('PlayStation 4', 'Electronics', 600, 25),
    ('Bluetooth Headphones', 'Electronics', 120, 43),
    ('Lego', 'Toys', 40, 77),
    ('Paper', 'Office',  8.50, 55);