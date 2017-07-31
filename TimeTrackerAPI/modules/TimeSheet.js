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
                  req.query("SELECT * FROM Clients", function (err, recordset) {
                        if (err) {
                            console.log(err);
                        }
                        else {  
                            db_connect.closeConnection();                           
                            callback(null,recordset);
                        }                       
                    });
                 
                }
       });   
   }

}


