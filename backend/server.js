const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Userroute = require("./Routes/Userroute");
const { notFound, errorHandler } = require("./middleware/errormiddleware");

dotenv.config();
connectDB();
app.use(express.json());
//app.get("/", (req, res) => {
// res.send("API Running!");
//});

app.use("/api/user", Userroute);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 8000;
app.listen(8000, console.log("server started on port 8000"));
