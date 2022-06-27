const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

function menu(){
    return inquirer.prompt([
        {
            type:'list',
            name: 'title',
            message:'What would you like to do?',
            choices: ['View all departments', 'View all roles','View all employees', 'Add a department','Add a role', 'Add an employee','Update employee role','Exit']
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
        if (userChoice.title==='Exit'){
            console.log('Goodbye')
        }
    })
}
function viewDept(){
const sql = `SELECT * FROM department`

db.query(sql, function(err, results){
    console.table(results)
    menu()
})
}
function viewEmployees(){
const sql = `SELECT * FROM employee`

db.query(sql, function(err, results){
    console.table(results)
    menu()
})
}
function viewRoles(){
const sql= `SELECT * FROM role`

db.query(sql, function(err, results){
    console.table(results)
    menu()
})

}
function addDepartment(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Dept_name',
            message: 'Enter department name ' 

        }
    ])
    .then(function(userChoice){
        const sql = `INSERT INTO department (name) VALUES(?)`
    
        db.query(sql,[userChoice.Dept_name], function(err, results){
            console.log("Department has been added to the database")
            menu()
        })

    })
}
function addRole(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter title name ' 
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter salary ' 
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter department_id ' 
        }
    ])
    .then(function(userChoice){
        const sql = `INSERT INTO role (title, salary, department_id) VALUES(?,?,?)`
    
        db.query(sql,[userChoice.title,userChoice.salary,userChoice.department_id], function(err, results){
            console.log("Role has been added to the database ")
            menu()
        })

    })
}
function addEmployee(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter first name'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter last name'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter role id'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter manager id '
        }
    ])
    .then(function(userChoice){
        const sql= `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`
        db.query(sql,[userChoice.first_name, userChoice.last_name, userChoice.role_id, userChoice.manager_id], function(err,results){
            console.log("Employee has been added to the database")
            menu()
        })
    })
}
function updateRole(){
    return inquirer.prompt([ 
        {
            type: 'input',
            name: 'id',
            message:'Enter employee id'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter new role id'
        }

    ])
    .then(function(userChoice){
        const sql = `UPDATE employee SET role_id=? WHERE id=? `
        db.query(sql,[userChoice.role_id,userChoice.id], function(err,results){
            console.log("Role has been updated")
            menu()
        })
    })  
}






menu()