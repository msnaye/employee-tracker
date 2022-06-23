INSERT INTO department (name)
VALUES
        ('Management'),
        ('IT Department'),
        ('Accounting'),
        ('Administration'),
        ('Human Resources');

INSERT INTO role (title, salary, department_id) 
VALUES  
       ('Project Manager', 8000, 1),
       ('Senior Engineer', 9000, 2),
       ('Engineer', 5600,2),
       ('Accountant', 5600, 3),
       ('Admin Assistant', 3500, 4),
       ('Recruiter', 7000, 5);     

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
       ('Ky','Clouds',2, NULL),       
       ('SKY','Rainbows',1, 1),       
       ('Ari','Stars',5, NULL);       
         
           