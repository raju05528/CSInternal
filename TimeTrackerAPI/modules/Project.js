"use strict";
let db = require("../db.js");
let cloudlog = require('../modules/logger.js');
let sql = require("mssql");

module.exports = class Timesheet {  
    
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
                }
       });   
   }


}


