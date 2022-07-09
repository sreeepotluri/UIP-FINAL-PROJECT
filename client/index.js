require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');

const userRoutes = require('./server/routes/user');
const postRoutes = require('./server/routes/post');

mongoose.connect(process.env.dbURL)
 .then(() => {
    console.log("DB Connected!!") //DB connected
 })
 .catch(error => console.log(error));

app.use(express.json());

app.use(express.static(__dirname + "/public"));
app.get('/', (req,res) => res.sendFile(path.join(__dirname, '/public', 'index.html')));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept, Authorization")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    next();
});

app.use('/user', userRoutes);
app.use('/post', postRoutes);

const PORT = process.env.PORT || 5000; //port changed to 50000
app.listen(PORT, () => console.log(`Server is running on port 5000`)); //server Running on Port 5000