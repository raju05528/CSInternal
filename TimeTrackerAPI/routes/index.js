"use strict";
let express = require('express');
let router = express.Router();
let db = require("../db.js");
let TimeSheet = require("../modules/TimeSheet.js");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'ExpressTimeSheet' });
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
