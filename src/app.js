const express = require("express");
const dotenv = require("dotenv");
const cookieParser=require('cookie-parser');
dotenv.config({ path: './config.env' });
require('./db/conn');
const User = require('../src/model/userSchema');
const app = express();
app.use(cookieParser());
const port = process.env.PORT;
// we link the router file
app.use(require('./router/auth'));
app.use(express.json());

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});