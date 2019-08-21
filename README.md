# Bamazon

## Description

Bamazon app is an Amazon-like storefront that runs on the command line and simulates an ecommerce store using MySQL and Node.js.

You can choose choose from a list of items and specify the amount you would like order. The total is calculated based on the units ordered. The supply ordered is deducted from the inventory database(bamazon_db). If there is not enough quantity available, the order will not go through and a sold out message will be printed for the user.

## Setup

To run Bamazon app, clone the repository and set up a locally hosted MySQL database.
1. Install Node Modules: npm install.
2. Change password and if necessary host, port and user values.
```JavaScript
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'nodeuser',
  password: 'root',
  database: 'bamazon_db'
});
```
 
## Examples
 
### Customer Module - run 'node bamazonCustomer.js' in CL
 
**Specify product to buy from product_name column.**
![Product List Screen Grab](/images/1.png/)

**Specify amount to order.**
![Product Selection and Quantity Screen Grab](/images/2.png/)

**
