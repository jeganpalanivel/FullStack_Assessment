const cors = require("cors")
const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");


//To load env variables
require ("dotenv").config();


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('Database connected successfully!');
    })
    .catch((err) => {
      console.error('Error connecting to the database', err);
      process.exit(1); 
    });


//initate express server
const app = express();

//adding middleware to server
app.use(bodyParser.json());
// app.use(expressValidator()); 
app.use(cors());

//importing Routes
const menuRoutes = require("./routes/userRoute");

app.use('/api',menuRoutes);

//routes
app.get("/",(req,res)=>{
    res.send("User Details");
});


//To connect server
const port = process.env.PORT || 8000


app.listen(port, () => console.log(`Listening on ${port}`));