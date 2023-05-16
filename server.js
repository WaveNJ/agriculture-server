const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: '157.245.59.56',
  user: 'u6402621',
  password: '6402621',
  database: 'u6402621',
  port: 3366
})

var app = express()
app.use(cors())
app.use(express.json())

app.get('/', function(req, res) {
  res.json({
    "status": "ok",
    "message": "Hello World"
  })
})

app.get('/Farmers', function(req, res) {
  connection.query(
    'SELECT * FROM Farmers',
    function(err, results) {
      console.log(results) //แสดงผลที่ console
      res.json(results) //ตอบกลับ request
    }
  )
})

app.get('/Harvests', function(req, res) {
  connection.query(
    'SELECT * FROM Harvests',
    function(err, results) {
      console.log(results) //แสดงผลที่ console
      res.json(results) //ตอบกลับ request
    }
  )
})

app.get('/Crops', function(req, res) {
  connection.query(
    'SELECT * FROM Crops',
    function(err, results) {
      console.log(results) //แสดงผลที่ console
      res.json(results) //ตอบกลับ request
    }
  )
})

app.get('/quantity', function(req, res) {
  connection.query(
    'SELECT * FROM Harvests ORDER BY quantity DESC;',
    function(err, results) {
      console.log(results); // แสดงผลที่ console
      res.json(results); // ตอบกลับ request
    }
  );
});


app.listen(5000, () => {
  console.log('Server is started.')
})
