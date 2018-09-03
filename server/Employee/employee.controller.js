const Employee = require('../sequalize').Employee;
const Department = require('../sequalize').Department;

let customers;
function getEmployees(req, res) {  
    console.log('=== called from client');   
    Employee.findAll()
        .then(employee =>         
        res.json({employees: employee})
    )
}

function getEmployeeswithDepartment(req, res) {      
    Employee.findAll({
     include: [{
        model: Department,
        as: 'depId',
        attributes: ['id', 'Name']       
      }]
    })
    .then(employee =>          
   // res.json({employees: employee}))
   res.json(employee))
}


function postEmployee(req, res){

    console.log('========= req : ', req.body);
    // Employee.create({
    //             name:'Chong',
    //             salary:5000,
    //             dID:1
    //         }).then(employee =>
    //                res.json(employee))
    Employee.create({
                name:req.body.name,
                salary:req.body.salary,
                dID:req.body.dID
            }).then(employee =>
                   res.json(employee))

    }

    function deleteEmployee(req, res){
        console.log('========= req : ', req.params.id);

        // User.findAndDelete(4,function(error,result){
        //     // all done
        //   });
        Employee.findAndDelete(req.params.id
                ).then(employee => res.json(employee))
    
        }
    



function getSingleEmployees(req, res) {  
        console.log('req.body.id : ', req.params.id)  
        Employee.find({
            where:{
                id: req.params.id
            }
        })
        .then(employee => 
             
            res.json({employees: employee})
        )
    }  

module.exports = { 
    getEmployees,
    postEmployee,
    getSingleEmployees,
    deleteEmployee,
    getEmployeeswithDepartment
};