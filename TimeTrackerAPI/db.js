"use strict";
let sql = require("mssql");
let cloudlog = require('./modules/logger.js');

var config = {
    user: 'Timesheetuser', //username created from SQL Management Studio
    password: 'Media123',
    server: '192.168.170.58',    //the IP of the machine where SQL Server runs
    timeout:25000,
    options: {
        instanceName: 'MSSQLSERVER',
        database: 'TimeSheet',  
        debug: {
            packet: false,
            payload: false,
            token: false,
            data: false
        },        
    }
};

//var connection = new sql.Connection(config);
module.exports =  class Db{
    
    getConnection(callback){
    let cldLog = new cloudlog();
       sql.connect(config, function (err) {
                if (err)  cldLog.logInfo('inside db:'+err);
                // create Request object
                var request = new sql.Request();
                callback(null,request);
          
            });     
    }

    closeConnection(callback){
        sql.close();
    }

}






 