require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const port = 4006;


app.use(cors());
app.use(express.json());

// get images
app.use("/uploads",express.static("./useruploads"))

// user routes
const userRoutes = require("./routes/userAuthRoutes");
app.use("/user/api",userRoutes);

app.get("/",(req,res)=>{
    res.status(200).json("server start")
});

// start server
app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})