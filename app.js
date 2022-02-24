const express = require('express');
const dotenv = require('dotenv');


const app = express();


// app.get('/', (req,res) => {
//     res.send("Hello World");
// });

// app.get('/parking', (req,res) => {   //parking is the table name
//     res.send('parking')           
// });

const connectDB = require('./config/db')

//Load Config

dotenv.config({ path: './config/config.env' });
connectDB();

//Routes

app.use('/', require('./routes/index'))


app.listen(3000);
