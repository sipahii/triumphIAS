const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const mySql = require('mysql')
const cors = require('cors');
// const { default: App } = require("../client/src/App");
const path = require('path')

app.use(express.static(path.join(__dirname + '/public')))

const courseRoute = require("./routes/course")

const db = mySql.createPool({
    host:"184.168.116.155",
    user:"aayan",
    password:"3CLjM0%jR~U+",
    database:"coding"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    const sqlInsert = "INSERT INTO CONTACT_DETAILS (NAME,EMAIL,CONTACT) VALUES ('aayan2','aayan2@gmail.com', '80772206895')"
    db.query(sqlInsert,(error,result)=>{
        console.log("error " + error)
        console.log("result " + result) 
        res.send("Hello world")
    })
   
})

app.use("api/v1/course",courseRoute);
// courseRoute.get('/course')


app.get("/api/v1/getDetails",(req,res)=>{
    const sqlGet = "SELECT * FROM  CONTACT_DETAILS";
    db.query(sqlGet,(error,result)=>{
      res.send(result)
    })

});

app.get("/api/getAllCourses",(req,res)=>{
   const courseId = req.body.courseId
    const sqlGet = "SELECT * FROM MS_COURSE_TBL";
    db.query(sqlGet,(error,result)=>{
        if(result){
            res.send(result);
        }else{
            res.send(error)
        }
    })
   // const request = req;
    //console.dir(req.body.courseId);
   

    
})

app.post("/api/getSingleCoursesDetails",(req,res)=>{
    const courseId = req.body.courseId
     const sqlGet = "SELECT * FROM MS_COURSE_TBL WHERE COURSE_ID =" +courseId;
     db.query(sqlGet,(error,result)=>{
         if(result){
             res.send(result);
         }else{
             res.send(error)
         }
     })
    // const request = req;
     //console.dir(req.body.courseId);
 
     
 })

app.post("/api/v1/login",(req,res)=>{
    var email = req.body.email;
    var password = req.body.password
   // const sqlPost = "SELECT * FROM MS_USER_TBL WHERE EMAIL_ID =" + email +" AND "+ "PASSWORD=" +password
    const sqlPost = "SELECT * FROM MS_USER_TBL WHERE EMAIL_ID = ? and PASSWORD = ?";
    db.query(sqlPost,[email,password],(error,result,fields)=>{
        console.log(result)
        if(result){
            res.send(result)
        }else{
            res.send(error)
        }
    })
})
app.listen(500,()=>{
    console.log("Server is running on Port 500")
})