"use strict";
let db = require("../db.js");
let cloudlog = require('../modules/logger.js');
let sql = require("mssql");

module.exports = class Timesheet {

    GetTimeEntryEmployeesDetails(FromDate,EndDate,Status,EmpID,callback){
    let db_connect = new db();
       let cldLog = new cloudlog();
       cldLog.logInfo('inside selectEmp');
       db_connect.getConnection(function (err, req) { 
           cldLog.logInfo('inside getconnection'+req);
            if (err) {
                cldLog.logInfo('inside getconnection err');
            }
            if(req)
                {                    
                    console.log('before sp call :FromDate : '+FromDate);
                    console.log('before sp call : EndDate : '+EndDate);
                    console.log('before sp call : Status : '+Status);
                    console.log('before sp call : EmpID : '+EmpID);
                    req.input('FromDate', sql.Date,FromDate);   
                    req.input('EndDate', sql.Date,EndDate);   
                    req.input('Status', sql.VarChar,Status);   
                    req.input('EmpID', sql.VarChar,EmpID);                            
                    req.execute("Usp_GetEmployeeTimeEntry").then(function (recordSet) {            
                            console.log('recordSet : '+JSON.stringify(recordSet));
                            db_connect.closeConnection();
                            callback(null,recordSet);
                        }).catch(function (err) {                            
                            console.log(err);
                            db_connect.closeConnection();
                        });                                              
                }
       });   
    }
   selectEmp(callback){
       let db_connect = new db();
       let cldLog = new cloudlog();
       cldLog.logInfo('inside selectEmp');
       db_connect.getConnection(function (err, req) { 
           cldLog.logInfo('inside getconnection'+req);
            if (err) {
                cldLog.logInfo('inside getconnection err');
            }
            if(req)
                {        
                    //req.input('EmployeeID', sql.Int,0);
                    req.execute("Usp_GetEmployeeDetails").then(function (recordSet) {            
                            console.log('recordSet : '+JSON.stringify(recordSet));
                            db_connect.closeConnection();
                            callback(null,recordSet);
                        }).catch(function (err) {                            
                            console.log(err);
                            db_connect.closeConnection();
                        });                                              
                }
       });   
   }
    
     GetSelectedEmployees(Employee_ID,callback){
         console.log('Employee_ID from GetSelectedEmployees : '+Employee_ID);
       let db_connect = new db();
       let cldLog = new cloudlog();
       cldLog.logInfo('inside GetSelectedEmployees');
       db_connect.getConnection(function (err, req) { 
           cldLog.logInfo('inside getconnection'+req);    
            if (err) {
                cldLog.logInfo('inside getconnection err');
            }
            if(req)
                { 
                    console.log('before select statement Employee_ID'+Employee_ID); 
                        req.input('EmployeeID', sql.Int,Employee_ID);
                         //request.input('xyz',sql.Int,1);
                        req.execute("Usp_GetEmployeeDetails").then(function (recordSet) {            
                            console.log('recordSet : '+JSON.stringify(recordSet));
                            db_connect.closeConnection();
                            callback(null,recordSet);
                        }).catch(function (err) {                            
                            console.log(err);
                            db_connect.closeConnection();
                        });

                    //Usp_GetEmployeeDetails                
                //   req.query('SELECT * FROM Employee where Employee_ID='+Employee_ID, function (err,recs) {
                //       console.log('after select statement ');
                //         if (err) {
                //             console.log(err);
                //         }
                //         else {  
                //             db_connect.closeConnection();     
                //             console.log('recs : '+recs);                                                                             
                //             callback(null,recs);
                //         }                       
                //     });                 
                }
       });   
   }


    GetWeeklyProjects(callback){
        let db_connect = new db();
       let cldLog = new cloudlog();
       cldLog.logInfo('inside GetWeeklyProjects');
       db_connect.getConnection(function (err, req) { 
           cldLog.logInfo('inside getconnection'+req);
            if (err) {
                cldLog.logInfo('inside getconnection err');
            }
            if(req)
                {                   
                  req.query("SELECT * FROM Employee where Employee_ID=?",[Employee_ID], function (err,recs) {
                        if (err) {
                            console.log(err);
                        }
                        else {  
                            db_connect.closeConnection();                                                                                  
                            callback(null,recs);
                        }                       
                    });                 
                }
       });  

    }
}


