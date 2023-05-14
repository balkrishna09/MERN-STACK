const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

//importing routes
const blog = require("./routes/blog");

//mounting routes
app.use("/api/v1",blog);

const connectWithDb = require("./config/database");
connectWithDb();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports = app;

app.get("/",(req, res)=>{
    res.send("Hello World");
})
