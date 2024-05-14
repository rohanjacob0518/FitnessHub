"use server"
import express from 'express'
import mysql from "mysql"
import cors from "cors"
import cookieParser from "cookie-parser"
import jwt, { decode } from "jsonwebtoken"
import multer from 'multer'
// import { redirect } from 'next/navigation'
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"fithub",
    // insecureAuth: true
})
if(!db){
    console.log("db connected")
}
else{
    console.log("connected")
}
app.get("/",(req,res)=>{
    res.json("hello this is the backend and your connected to the database")
})

app.use(cookieParser());
app.use(express.json());
app.use("/files",express.static("files"))
app.use(cors(
   {
    origin: ["http://localhost:3005"],
    methods: ["POST, GET","DELETE"],
    credentials: true
}
));
// username token
const getUserName = (req,res,next) =>{
    const token = req.cookies.username;
    
    if(!token){
        return res.json({Message: "we need token please. Login now"})
    } else {
        jwt.verify(token,"our-jsonwebtoken- secrete-key",(err,decode)=>{
            if(err){
                return res.json({Message: "Authentication error."})
            } else {
                req.name = decode.name;
                // req.age = decode.age;
                next();
            }
        })
    }
}
app.get('/toke',getUserName,(req,res)=>{
    return res.json({Status: "Success",name: req.name})
})
// age token
const getUserAge = (req,res,next) =>{
    const tokenAge = req.cookies.userAge;
    
    if(!tokenAge){
        return res.json({Message: "we need token please. Login now"})
    } else {
        jwt.verify(tokenAge,"our-jsonwebtokenAge- secrete-key",(err,decode)=>{
            if(err){
                
                return res.json({Message: "Authentication error."})
            } else {
                req.age = decode.age;
                next();
            }
        })
    }
}
app.get('/age',getUserAge,(req,res)=>{
    return res.json({Status: "Success",age: req.age})
})
// userEmail Token
const getUserEmail = (req,res,next) =>{
    const tokenEmail = req.cookies.userEmail;
    
    if(!tokenEmail){
        return res.json({Message: "we need token please. Login now"})
    } else {
        jwt.verify(tokenEmail,"our-jsonwebtokenEmail- secrete-key",(err,decode)=>{
            if(err){
                
                return res.json({Message: "Authentication error."})
            } else {
                req.email = decode.email;
                next();
            }
        })
    }
}
app.get('/userEmail',getUserEmail,(req,res)=>{
    return res.json({Status: "Success",userEmail: req.email})
})
// userlogin
app.post("/login",(req,res)=>{
    const q = "SELECT username,password,age,useremail FROM user where useremail=(?)"
    const val = req.body.email
    const pass = req.body.pass
    db.query(q,val,(err,data)=>{
        if(data.length===0){
            return res.json("NoUser")
        }
        if(err){
             return res.json(err)
        }
        else{
            const dbpass = (data[0].password)
            const name = (data[0].username)
            const age = (data[0].age)
            const email = (data[0].useremail)
            const token = jwt.sign({name},"our-jsonwebtoken- secrete-key")
            const tokenAge = jwt.sign({age},"our-jsonwebtokenAge- secrete-key")
            const tokenEmail = jwt.sign({email},"our-jsonwebtokenEmail- secrete-key")
            // const tokenPass = jwt.sign({dbpass},"our-jsonwebtokenTPassword- secrete-key")
            res.cookie('username',token)
            res.cookie('userAge',tokenAge)
            res.cookie('userEmail',tokenEmail)
            // res.cookie('trainePassword',tokenPass)
            if(dbpass === pass){
                return res.json(name)
            }
            if(dbpass != pass){
                return res.json("invalid")
            }
        }
    })
})
// userdetails
app.get("/showUserDetails",(req,res)=>{
    // const q = "SELECT iduser, username, useremail, dob,age,contact,gender FROM user"
    const q = "SELECT * FROM user"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        // console.log(data[2].iduser)
        return res.json(data)
    })
})
// trainerdetails
app.get("/showTrainerDetails",(req,res)=>{
    // const q = "SELECT iduser, username, useremail, dob,age,contact,gender FROM user"
    // console.log("trainer details")
    const q = "SELECT * FROM trainer"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        // console.log(data)
        return res.json(data)
    })
})

// adminDetails
app.get("/showAdminDetails",(req,res)=>{
    // const q = "SELECT iduser, username, useremail, dob,age,contact,gender FROM user"
    // console.log("trainer details")
    const q = "SELECT * FROM admin"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        // console.log(data)
        return res.json(data)
    })
})

// delete trainer details
app.delete("/deleteTrainer/:idtrainer",(req,res)=>{
    // console.log("entered in server delete")
    const idtrainer = req.params.idtrainer
    const q = "DELETE FROM trainer where idtrainer = (?)"
    // console.log("")
    db.query(q,idtrainer,(err,data)=>{
        if(err) return res.json(err);
        return res.json("Trainer has been deleted successfully");
    })
}) 
// user register
app.post("/register",(req,res)=>{
    let exval = 0;
    const q ="INSERT INTO user (`username`,`useremail`,`dob`,`age`,`password`,`contact`,`gender`,`calories`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.dob,
        req.body.age,
        req.body.password,
        req.body.contact,
        req.body.gender,
    ]
    let actval = parseFloat(req.body.activity)
    let bmr
    let a = parseInt(values[3])
    const heigh = parseInt(req.body.height)
    const h = heigh/100
    const weigh = parseInt(req.body.weight)
    console.log(heigh)
    if(values[6] === "male") {
            exval = 5
            bmr = (10*weigh)+(6.25* heigh)-(5*a)+exval
        }
    if(values[6] === "female"){
        exval = 161
        bmr = (10*weigh)+(6.25*heigh)-(5*a)-exval
    }
    console.log(exval)
    console.log(actval)
    console.log(bmr)

    const bmi = actval * bmr
    // console.log(weigh)
    // console.log(heigh)
    // console.log(h)
    console.log(bmi)
    values[7] = bmi.toString()
    // console.log(values)
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been added")
    })
})
// trainer Register
app.post("/trainerregister",(req,res)=>{
    const q ="INSERT INTO trainer (`trainername`,`traineremail`,`password`,`gender`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.gender
    ]
    console.log(values)
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been added")
    })
})

// admin Register
app.post("/adminRegister",(req,res)=>{
    const q ="INSERT INTO admin (`adminname`,`adminemail`,`password`,`gender`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.gender
    ]
    console.log(values)
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been added")
    })
})


// trainer login
app.post("/trainerlogin",(req,res)=>{
    // res.json("Now you are connected to the books route")
    // console.log("entered ")
    const q = "SELECT trainername,traineremail,password FROM trainer where traineremail=(?)"
    const val = req.body.email
    const pass = req.body.password
    console.log(pass)
    console.log(val)
    db.query(q,val,(err,data)=>{
        console.log("data:",data.length)
        if(data.length===0){
            return res.json("NoUser")
        }
        if(err){
             return res.json(err)
        }
        else{
            
                const dbpass = (data[0].password)
                const trname = (data[0].trainername)
                const tremail = (data[0].traineremail)
                // console.log("name is ",data)
                const trainname = jwt.sign({trname},"our-jsonwebtokenAd- secrete-key")
                const traineremail = jwt.sign({tremail},"our-jsonwebtokenTrainerEmail- secrete-key")
                // console.log("cookie is",trainname)
                // res.cookie('trainname',traineName)
                res.cookie('trainname',trainname)
                res.cookie('trainerEmail',traineremail)
                if(dbpass === pass){
                    return res.json("Success")
                }
                if(dbpass != pass){
                    return res.json("invalid")
                }
        }
    })
})
// trainerName token
const getTrainerName = (req,res,next) =>{
    const token = req.cookies.trainname;
    
    if(!token){
        return res.json({Message: "we need token please. Login now"})
    } else {
        jwt.verify(token,"our-jsonwebtokenAd- secrete-key",(err,decode)=>{
            if(err){
                return res.json({Message: "Authentication error."})
            } else {
                req.trname = decode.trname;
                // req.age = decode.age;
                // console.log(req.trname)
                next();
            }
        })
    }
}
app.get('/trainertoke',getTrainerName,(req,res)=>{
    return res.json({Status: "Success",trname: req.trname})
})

// show trainer-schedule
app.get("/showTrainerSchedule",(req,res)=>{
    const tokenTrainerEmail = req.cookies.trainerEmail;
    jwt.verify(tokenTrainerEmail,"our-jsonwebtokenTrainerEmail- secrete-key",(err,decode)=>{
        if(err){
            
            return res.json({Message: "Authentication error."})
        } else {
            req.tremail = decode.tremail;
            // next();
        }
    })
    // const email = req.email
    // req.email = decode.email
    // console.log("email is",req.email)
    const email = req.tremail
    // console.log("email is",tokenEmail)
    const q = "SELECT * FROM meetschedule where traineremail=(?)"
    db.query(q,email,(err,data)=>{
        if(err) return res.json(err)
        // console.log(data)
        return res.json(data)
    })
})

// adminlogin
app.post("/adminlogin",(req,res)=>{
    // res.json("Now you are connected to the books route")
    // console.log("entered ")
    const q = "SELECT adminname,password FROM admin where adminemail=(?)"
    const val = req.body.adminemail
    const pass = req.body.password
    // console.log(pass)
    // console.log(val)
    db.query(q,val,(err,data)=>{
        // if(data.length===0){
        //     return res.json("NoUser")
        // }
        if(err){
             return res.json(err)
        }
        else{
            const dbpass = (data[0].password)
            const adname = (data[0].adminname)
            const adminName = jwt.sign({adname},"our-jsonwebtokenAdmin- secrete-key")
            // const tokenAge = jwt.sign({age},"our-jsonwebtokenAge- secrete-key")
            const tokenEmail = jwt.sign({val},"our-jsonwebtokenAdminEmail- secrete-key")
            // const tokenPass = jwt.sign({dbpass},"our-jsonwebtokenTPassword- secrete-key")
            res.cookie('adminname',adminName)
            // res.cookie('userAge',tokenAge)
            res.cookie('adminEmail',tokenEmail)
            // console.log(tokenEmail)
            if(dbpass === pass){
                return res.json(adname)
            }
            if(dbpass != pass){
                return res.json("invalid")
            }
        }
    })
})

// adminName token
const getAdminName = (req,res,next) =>{
    const token = req.cookies.adminname;
    
    if(!token){
        return res.json({Message: "we need token please. Login now"})
    } else {
        jwt.verify(token,"our-jsonwebtokenAdmin- secrete-key",(err,decode)=>{
            if(err){
                return res.json({Message: "Authentication error."})
            } else {
                req.adname = decode.adname;
                // req.age = decode.age;
                next();
            }
        })
    }
}
app.get('/admintoke',getAdminName,(req,res)=>{
    return res.json({Status: "Success",adname: req.adname})
})

//delete userdetails
app.delete("/deleteuser/:iduser",(req,res)=>{
    // console.log("entered in server delete")
    const iduser = req.params.iduser
    const q = "DELETE FROM user where iduser = (?)"
    // console.log("")
    db.query(q,iduser,(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been deleted successfully");
    })
}) 
// useremail
app.get("/showUserEmail",(req,res)=>{
    // const q = "SELECT iduser, username, useremail, dob,age,contact,gender FROM user"
    const q = "SELECT iduser,useremail FROM user"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        // console.log(data)
        return res.json(data)
    })
})
// trainerEmail
app.get("/showTrainerEmail",(req,res)=>{
    // const q = "SELECT iduser, username, useremail, dob,age,contact,gender FROM user"
    const q = "SELECT idtrainer,traineremail FROM trainer"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        // console.log(data)
        return res.json(data)
    })
})
// schedule storing
app.post("/schedulemeet",(req,res)=>{
    const q ="INSERT INTO meetschedule (`useremail`,`traineremail`,`date`,`time`,`limit`,`meetlinkuser`,`meetlinktrainerl`,`roomname`) VALUES (?)"
    const values = [
        req.body.useremail,
        req.body.traineremail,
        req.body.date,
        req.body.time,
        // req.body.timelimit,
    ]
    const roomname = req.body.room
    values[4]="0"
    values[5] = `http://localhost:3000/room?room=${roomname}&name=${values[0]}`
    values[6] = `http://localhost:3000/room?room=${roomname}&name=${values[1]}`
    values[7] = roomname
    // console.log(values[4])
    // console.log(values)
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        console.log(err)
        console.log("data added")
        return res.json("data has been added")
    })
})
// userschedule
app.get("/showSchedule",(req,res)=>{
    const tokenEmail = req.cookies.userEmail;
    jwt.verify(tokenEmail,"our-jsonwebtokenEmail- secrete-key",(err,decode)=>{
        if(err){
            
            return res.json({Message: "Authentication error."})
        } else {
            req.email = decode.email;
            // next();
        }
    })
    // const email = req.email
    // req.email = decode.email
    // console.log("email is",req.email)
    const email = req.email
    // console.log("email is",tokenEmail)
    const q = "SELECT * FROM meetschedule where useremail=(?)"
    db.query(q,email,(err,data)=>{
        if(err) return res.json(err)
        // console.log(data)
        return res.json(data)
    })
})
// list all scheduled meeting
app.get("/showAllMeetings",(req,res)=>{
    // const q = "SELECT iduser, username, useremail, dob,age,contact,gender FROM user"
    const q = "SELECT * FROM meetschedule"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        // console.log(data[2].iduser)
        return res.json(data)
    })
})

// show user request
app.get("/showUserRequest",(req,res)=>{
    // const q = "SELECT iduser, username, useremail, dob,age,contact,gender FROM user"
    const q = "SELECT * FROM meetrequest"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        // console.log(data[2].iduser)
        return res.json(data)
    })
}) 

// delete user request
app.delete("/deleteRequest/:requestid",(req,res)=>{
    console.log("entered in rqst delete")
    const requestid = req.params.requestid
    const q = "DELETE FROM meetrequest where requestid = (?)"
    // console.log("")
    db.query(q,requestid,(err,data)=>{
        if(err) return res.json(err);
        return res.json("Trainer has been deleted successfully");
    })
}) 

// delete scheduled meeting
app.delete("/deleteSchedule/:sessionid",(req,res)=>{
    // console.log("entered in server delete")
    const sessionid = req.params.sessionid
    const q = "DELETE FROM meetschedule where sessionid = (?)"
    // console.log("")
    db.query(q,sessionid,(err,data)=>{
        if(err) return res.json(err);
        return res.json("Trainer has been deleted successfully");
    })
}) 
// request meet
app.post("/requestmeet",(req,res)=>{
    const q ="INSERT INTO meetrequest (`requestemail`,`meetdate`,`comment`) VALUES (?)"
    const values = [
        req.body.email,
        req.body.meetdate,
        req.body.comment
    ]
    // console.log(values[4])
    console.log(values)
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        console.log(err)
        console.log("data added")
        return res.json("data has been added")
    })
})

// upload trainer details with resume
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null,
            uniqueSuffix+
            file.originalname)
        }
    })
    
    //   const PdfSchema = mongoose.model("PdfDetails")
    const upload = multer({ storage: storage })
    app.post("/trainerupload",upload.single('file'),async(req,res)=>{
        const q = "INSERT INTO trainerrequest (`trainername`,`traineremail`,`trainerage`,`resumeroot`) VALUES (?)"
        console.log("file uploaded")
        // const title = req.body.title
        // const name = req.body.name
        const fileName = req.file.filename
        const values =[
            req.body.name,
            req.body.email,
            req.body.age,
        ]
        const fileRoot = "http://localhost:9900/files/"+fileName
        values[3] = fileRoot
        console.log(fileRoot)
        console.log(values)
    // console.log(name)
    // res.send('upload successfully')
    try{
        // await PdfSchema.create({name:name,email:title,pdf: fileName})
        // res.send({status:"ok"});
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err)
            res.send({status:"ok"})
        })
    }
    catch(e){
        res.json({status:e})
    }
})

// display all trainer resume
app.get("/showTrainerResume",(req,res)=>{
    const q = "SELECT * FROM trainerrequest"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

// delete trainer resume request
app.delete("/deleteResumeTrainer/:idtrainer",(req,res)=>{
    // console.log("entered in server delete")
    const idtrainer = req.params.idtrainer
    const q = "DELETE FROM trainerrequest where idtrainerrequest = (?)"
    // console.log("")
    db.query(q,idtrainer,(err,data)=>{
        if(err) return res.json(err);
        return res.json("Trainer has been deleted successfully");
    })
})

// assign Trainer to user
app.post("/assignTrainer",(req,res)=>{
    const q ="INSERT INTO assign (`traineremail`,`useremail`) VALUES (?)"
    const values = [
        req.body.traineremail,
        req.body.useremail
    ]
    // console.log(values[4])
    console.log(values)
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        console.log(err)
        console.log("data added")
        return res.json("data has been added")
    })
})
// show assigned user
app.get("/showAssign",(req,res)=>{
    const q = "SELECT * FROM assign"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

// show trainer-assign
app.get("/showTrainerassign",(req,res)=>{
    const tokenTrainerEmail = req.cookies.trainerEmail;
    jwt.verify(tokenTrainerEmail,"our-jsonwebtokenTrainerEmail- secrete-key",(err,decode)=>{
        if(err){
            
            return res.json({Message: "Authentication error."})
        } else {
            req.tremail = decode.tremail;
            // next();
        }
    })
    // const email = req.email
    // req.email = decode.email
    // console.log("email is",req.email)
    const email = req.tremail
    // console.log("email is",tokenEmail)
    const q = "SELECT * FROM assign where traineremail=(?)"
    db.query(q,email,(err,data)=>{
        if(err) return res.json(err)
        // console.log(data)
        return res.json(data)
    })
})

app.listen(9900, ()=>{
    console.log("Connected to the server")
})