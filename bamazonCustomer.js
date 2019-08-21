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
            console.log(res[i].item_id + '|--|' + res[i].product_name + '|--|' + res[i].department_name + '|--|' + res[i].price + '|--|' + res[i].stock_quantity + '\n');
        }
        console.table(res);
        // once displayed, prompt user if they want to buy a product
        promptCustomer(res);
    })
}

var promptCustomer = function(res) {
    // take user input for first question
    inquirer.prompt([
        {
            type: 'input',
            name: 'choice',
            message: 'What product would you like to buy? [Press C to Cancel]',
        }
    ]).then(function(answer) {
        var correct = false;
        // if user wants to cancel then can press 'C'
        if (answer.choice.toUpperCase() === 'C') {
            process.exit();
        }
        // if input matches item 
        for (var i = 0; i < res.length; i++) {
            if (res[i].product_name === answer.choice) {
                correct = true;
                var product = answer.choice;
                var id = i;
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'quantity',
                        message: 'How many would you like to buy?',
                        validate: function(value) {
                            if (isNaN(value) === false) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                        // if stock_quantity is not less than zero then minus amount ordered from total
                    }
                ]).then(function(answer) {
                    if ((res[id].stock_quantity - answer.quantity) > 0) {
                        connection.query("UPDATE products SET stock_quantity='" + (res[id].stock_quantity - answer.quantity) + "'WHERE product_name='" + product + "'", function(err, res2) {
                            start();
                            var totalCost = answer.quantity * res[id].price;
                            console.log('\n' + '---------------------------------------' + '\n');
                            console.log('\n' + 'You bought a product' + '\n');
                            console.log('Total cost: $ ' + totalCost + '\n');
                            console.log('---------------------------------------' + '\n');
                        })
                        // if zero quantity, let user know
                    } else {
                        console.log('\n' + '---------------------------------------' + '\n')
                        console.log('Item is sold out!' + '\n');
                        console.log('---------------------------------------' + '\n')
                        promptCustomer(res);
                    }
                })
            }
        }
        // if input does not match item in table
        if (i === res.length && correct === false) {
            console.log('\n' + '---------------------------------------' + '\n');
            console.log('Invalid choice!' + '\n');
            console.log('---------------------------------------' + '\n');
            promptCustomer(res);
        }
    })
}