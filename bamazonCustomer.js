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