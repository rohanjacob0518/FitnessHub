"use client"
import { Navbar } from "@/components/navbar"
import "./style.css"
import { Divider } from "@nextui-org/react"
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
export default function TrainerSignup(){
    const router = useRouter()
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");
  const [file,setFile] = useState("");

  const handleClick = async (e: any) =>{
    e.preventDefault()
    console.log("entered in handle click")
    const formData = new FormData();
    formData.append("name",name);
    formData.append("email",email)
    formData.append("age",age)
    formData.append("file",file)
    // console.log(formData)
    console.log(name,email,age,file)
    const result = await axios.post("http://localhost:9900/trainerupload",
    formData,
    {
        headers : {"Content-Type":"multipart/form-data"}
    });
    console.log(result)
    alert("File Uploaded")
    window.location.reload();
}
    return(
        <>
        {/* <Navbar/> <Divider/> */}
        <div className="login-box">
        
            <form>
                <label>Username</label>
            <div className="user-box">
                <input type="text" name="name" required onChange={(e)=>setName(e.target.value)}/>
            </div>
                <label>Email-Id</label>
            <div className="user-box">
                <input type="text" name="email" required onChange={(e)=>setEmail(e.target.value)}/>
            </div>
                <label>Age</label>
            <div className="user-box">
                <input type="number" name="age" required onChange={(e)=>setAge(e.target.value)}/>
            </div>
                <label>Upload Resume</label>
            <div className="user-box">
                <input type="file" name="file" required accept="application/pdf" onChange={(e)=>setFile(e.target.files[0])}/>
            </div><center>
                <button onClick={handleClick}>

            <a>
                    Register
                <span></span>
            </a>
                </button>
            </center>
            </form>
        </div>
        </>
    )
}