// call all the required packages
const express = require('express')
const bodyParser= require('body-parser')
const multer = require('multer');
const MongoClient = require('mongodb').MongoClient;
const app = express()
app.use(bodyParser.urlencoded({extended: true}))

//ROUTES WILL GO HERE
app.get('/', function(req, res) {
    res.json({ message: 'WELCOME' });
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
var upload = multer({ storage: storage })


app.post('/upload', upload.single('avatar'), (req, res) => {
  if (!req.file) {
    return res.send({
      success: false
    });
  } else {
    return res.send({
      success: true,
      plateNumber:"KA12345"
    })
  }
});

app.listen(3000, () => console.log('Server started on port 3000'));
