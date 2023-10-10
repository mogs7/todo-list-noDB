import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var todayItemList = [];
var workItemList = [];
var isWork = false;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index.ejs', {
        newItem: todayItemList,
        workList: isWork = false,
    });
})

app.post('/submit', (req,res) => {
    console.log(req.body["todoItem"]);
    todayItemList.push(req.body["todoItem"]);
    res.render('index.ejs', {
        newItem: todayItemList,
        workList: isWork = false,
    })
})

app.get('/submit', (req,res) => {
    res.render('index.ejs', {
        newItem: todayItemList,
        workList: isWork = false,
    });
})

app.get('/work', (req,res) => {
    res.render('index.ejs', {
        newItem: workItemList,
        workList: isWork = true,
    })
})

app.post('/work', (req,res) => {
    workItemList.push(req.body["todoItem"]);
    res.render('index.ejs', {
        newItem: workItemList,
        workList: isWork = true,
    })
})

app.listen(port, () => {
    console.log("Server running on port: " + port);
})