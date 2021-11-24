'use strict';

const express = require('express');

//mysql 
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
connection.connect();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello this is my NodeJs app'); //display my message
});

//counter
function counter_hits(){
    var counter = document.getElementById("cntr")
    var c = parseInt(counter.innerHTML)
    c = c + 1
    counter.innerHTML = c
  }
  window.onload = counter_hits; 

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);