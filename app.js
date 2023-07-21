const express=require("express");
const mongoose=require("mongoose");
const router = require("./routes/book-routes");
const cors=require('cors');
const app=express();
const PORT = process.env.PORT || 8000;
//middlewares
app.use(express.json());
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "https://localhost:8000/books");
//     next();
//   });
app.use(cors());
app.use("/books",router);
// app.get('/', function(req, res){
//     res.render('app.js');
//   });
// app.use(express.static(__dirname + '/public'));
mongoose.connect("mongodb+srv://admin:itFz3lacFuJX2O7I@cluster0.7dgxr4j.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("Connected to database"))
.then(()=>{
    app.listen(PORT);
}).catch((err)=>console.log(err));

