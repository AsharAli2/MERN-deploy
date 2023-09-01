const express = require("express")
const mongoose = require("mongoose")
const {UserModel} = require("./models/user")
const app = express();
const router=require("./routes/users");
const productrouter = require("./routes/products");
var cors = require('cors');
const path = require("path")
require("dotenv").config();


mongoose.connect(process.env.mongoURL)
.then(() => console.log('Connected!'));

app.use(express.json());
app.use(cors())
app.use("/user",router)
app.use("/products",productrouter)

app.use(express.static(path.join(__dirname, './frontend/dist')));
app.get('*', function(_,res){
    res.send(path.join(__dirname, "./frontend/dist/index.html"), function(err){
        res.status(500).send(err)
    })
})
const PORT=process.env.PORT || 8000;
app.listen(PORT, ()=> console.log("server is running"))
