"use strict";
let express = require('express');
let router = express.Router();
let db = require("../db.js");
let TimeSheet = require("../modules/TimeSheet.js");
var dateFormat = require('dateformat');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'ExpressTimeSheet' });
});

Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}
router.get('/TimeSheet/GetTimeEntryEmployeesDetails', function (req, res) {    
     let EndDate = new Date();           
     let FromDate=EndDate;//EndDate.addDays(-28);         
    dateFormat.masks.hammerTime = 'yyyy-mm-dd'; //'dd-mm-yyyy HH:MM:ss'   
    console.log('FromDate : '+ dateFormat(FromDate, "hammerTime"));
     let Status="submitted";  
     let EmpID="MSI1368";     
    let TimeSheetObj = new TimeSheet();    
    TimeSheetObj.GetTimeEntryEmployeesDetails(dateFormat(FromDate, "hammerTime"),dateFormat(EndDate, "hammerTime"),Status,EmpID,function (err, result) {
        if (err)
            reject(err);
        res.json(result);
    })
});

router.get('/TimeSheet/selectEmp', function (req, res) {
    let TimeSheetObj = new TimeSheet();
    TimeSheetObj.selectEmp(function (err, result) {
        if (err)
            reject(err);
        res.json(result);
    })
});
router.get('/TimeSheet/GetSelectedEmployees/Employee_ID/:Employee_ID', function (req, res) {
    console.log('res : ' + res);
    let Employee_ID = req.body.Employee_ID;
    console.log('request body Employee_ID : ' + Employee_ID);
    return new Promise((resolve, reject) => {
        let Employee_ID = req.params.Employee_ID;
        console.log('Employee_ID : ' + Employee_ID);
        if (Employee_ID) {
            let TimeSheetObj = new TimeSheet();
            TimeSheetObj.GetSelectedEmployees(Employee_ID, function (err, result) {
                if (err)
                    reject(err);
                res.json(result);
            });
        } else {
            return res.send(JSON.stringify({ status: 402, msg: 'No Employee_id supplied' }));
        }
    });
});
router.post('/TimeSheet/GetWeeklyProjects', function (req, res) {
    let Employee_ID = req.body.Employee_ID;
    console.log('Employee_ID : ' + Employee_ID);
    let TimeSheetObj = new TimeSheet();
    TimeSheetObj.GetWeeklyProjects(function (err, result) {
        if (err)
            reject(err);
        res.json(result);
    })
});


module.exports = router;
