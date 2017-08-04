"use strict";
let db = require("../db.js");
let cloudlog = require('../modules/logger.js');

module.exports = class Timesheet {
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
                  req.query("SELECT * FROM Employee", function (err,recs) {
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
     GetSelectedEmployees(Employee_ID,callback){
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


