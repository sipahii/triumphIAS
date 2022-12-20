const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const mySql = require('mysql')
const cors = require('cors')

const db = mySql.createPool({
    host:"184.168.116.155",
    user:"aayan",
    password:"3CLjM0%jR~U+",
    database:"coding"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

// app.get("/",(req,res)=>{
//     // const sqlInsert = "INSERT INTO CONTACT_DETAILS (NAME,EMAIL,CONTACT) VALUES ('aayan2','aayan2@gmail.com', '80772206895')"
//     // db.query(sqlInsert,(error,result)=>{
//     //     console.log("error " + error)
//     //     console.log("result " + result) 
//     //     res.send("Hello world")
//     // })
   
// })
app.get("/api/get",(req,res)=>{
    const sqlGet = "SELECT * FROM  CONTACT_DETAILS";
    db.query(sqlGet,(error,result)=>{
      res.send(result)
    })

});
app.listen(500,()=>{
    console.log("Server is running on Port 500")
})