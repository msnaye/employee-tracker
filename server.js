
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');


function menu(){
    return inquirer.prompt([
        {
            type:'list',
            name: 'title',
            message:'What would you like to track?',
            choices: ['View all departments', 'View all roles','View all employees', 'Add a department','Add a role', 'Add an employee','Update employee role']
        }
    ])
    .then(function(userChoice){
        console.log(userChoice.title);
    })
}







menu()