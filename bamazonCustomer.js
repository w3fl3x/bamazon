var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'nodeuser',

    password: 'root',
    database: 'bamazon_db'
});

connection.connect(function(err) {
    if (err) throw err;

    start();
});

var start = function() {
    // display table for user to see items
    connection.query('Select * from products', function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.table(res[i].item_id + res[i].product_name + res[i].department_name + res[i].price + res[i].stock_quantity + '\n');
        }
        // once displayed, prompt user if they want to buy a product
        promptCustomer(res);
    })
}

inquirer.prompt([

])