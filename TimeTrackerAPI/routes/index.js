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
router.post('/TimeSheet/GetSelectedEmployees', function (req, res) {
     let Employee_ID = req.body.Employee_ID;
     console.log('Employee_ID : '+Employee_ID);
    let TimeSheetObj = new TimeSheet();
    TimeSheetObj.GetSelectedEmployees(Employee_ID,function (err, result) {
        if (err)
            reject(err);
        res.json(result);
    })
});
router.post('/TimeSheet/GetWeeklyProjects', function (req, res) {
     let Employee_ID = req.body.Employee_ID;
     console.log('Employee_ID : '+Employee_ID);
    let TimeSheetObj = new TimeSheet();
    TimeSheetObj.GetWeeklyProjects(function (err, result) {
        if (err)
            reject(err);
        res.json(result);
    })
});


module.exports = router;
