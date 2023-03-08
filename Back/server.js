import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import bodyParser from "body-parser";
import routes from "./src/routes/user";
const app = express();
app.use(bodyParser.json());
app.use ('/',routes)


  // server configuration
  const server = process.env.PORT || 3040
app.listen(server,() =>{
    console.log (`server is running on port ${server}`);
})
//database configuration
const database = process.env.DATABASE;
mongoose
.connect(database,{
       useNewUrlParser: true,
       useUnifiedTopology: true,
     })
     .then(() => {
       console.log("Database is well connected!");
  });



export default app