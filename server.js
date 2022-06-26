const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

function menu(){
    return inquirer.prompt([
        {
            type:'list',
            name: 'title',
            message:'What would you like to do?',
            choices: ['View all departments', 'View all roles','View all employees', 'Add a department','Add a role', 'Add an employee','Update employee role']
        }
    ])
    .then(function(userChoice){
        //console.log(userChoice.title);
        if (userChoice.title==='View all departments'){
            viewDept()
        }
        if (userChoice.title==='View all employees'){
            viewEmployees()
        }
        if (userChoice.title==='View all roles'){
            viewRoles()
        }
        if (userChoice.title==='Add a department'){
            addDepartment()
        }
        if (userChoice.title==='Add a role'){
            addRole()
        }
        if (userChoice.title==='Add an employee'){
            addEmployee()
        }
        if (userChoice.title==='Update employee role'){
            updateRole()
        }
    })
}
function viewDept(){
const sql = `SELECT * FROM department`

db.query(sql, function(err, results){
    console.table(results)
})
}
function viewEmployees(){
const sql = `SELECT * FROM employee`

db.query(sql, function(err, results){
    console.table(results)
})
}
function viewRoles(){
const sql= `SELECT * FROM role`

db.query(sql, function(err, results){
    console.table(results)
})

}
function addDepartment(){
    const sql = `SELECT * FROM department`

    db.query(sql, function(err, results){
        console.table(results)
    })
}
function addRole(){
    const sql= `SELECT * FROM role`

    db.query(sql, function(err, results){
        console.table(results)
    })
}
function addEmployee(){
    const sql = `INSERT INTO employee * FROM employee`

    db.query(sql, function(err, results){
        console.table(results)
    })
}
function updateRole(){
    const sql= `UPDATE * FROM role`

    db.query(sql, function(err, results){
        console.table(results)
    })    
}






menu()