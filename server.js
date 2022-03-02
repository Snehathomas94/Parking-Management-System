//import dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');

const swaggerDefinition = yaml.load('./swagger.yaml');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));



require('dotenv-flow').config();


const parkingRoutes = require("./routes/parking");
const authRoutes = require("./routes/auth");

// middleware defitions
// parse requests of content-type - application/json
app.use(bodyParser.json());


mongoose.connect (
  process.env.DBHOST,  { useUnifiedTopology: true, useNewUrlParser: true }
).catch(error => console.log("Error connecting to MongoDB: " + error));

mongoose.connection.once('open', () => console.log('Connected succesfully to MongoDB'));

//routes definition
//Welcome route
app.get("/api/welcome", (req,res) => {
  res.status(200).send({message: "Welcome to the MEN-REST-API"});
}); 


app.use("/api/parking", parkingRoutes); //CRUD routes
app.use("/api/user", authRoutes);


//start up server
const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log("Server is running on port:  " + PORT);
});

module.exports = app;
