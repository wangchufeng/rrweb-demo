var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var server = require('http').createServer(app);

app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

var events = []


app.get('/', function(req , res){
    res.sendFile(__dirname + '/record/index.html')
})

app.get('/replay', function(req, res){
    res.sendFile(__dirname + '/replay/index.html')
})

app.post('/recordEvents', function(req, res){    
    events = events.concat(req.body.events)
    res.send('ok')
})

app.get('/getEvents', function(req, res){
    res.send(events);
})

app.listen(3000)