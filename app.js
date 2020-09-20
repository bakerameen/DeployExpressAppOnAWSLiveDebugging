var express = require('express');
const mongoose = require("mongoose");
var app = express()

const dbPath = "mongodb+srv://baqer:iggy5R1y8urUhxts@cluster0-2wlh3.mongodb.net/Naseej-letter-competetion?retryWrites=true&w=majority";
mongoose
  .connect(dbPath, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log('error DB not Connected');
  });

app.get('/', (req, res) => {
res.send('hello AWS');
})

app.listen(8080, () => {
    console.log('server started')
})