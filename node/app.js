const express = require('express')
const bodyparser = require('body-parser');
const router = require('./routes/auth.route')
const dashboard_router = require('./routes/dashboard.route')
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../react-batch2-class/build")));

app.use(cookieParser());


app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyparser.json())
app.get('/test', function(req,res){
  res.send('Hello world')
})
// app.use('/',(req,res)=>{
// 	res.sendFile(path.join(__dirname, "../react-batch2-class/build/index.html"))
// })
app.use('/account/api',router)

//Server 
app.listen('8000',function(req,res){
    console.log('Serve is up and running at the port 8000')
  })