"use client"

import { Navbar } from "@/components/navbar"
import "./style.css"
import { Divider } from "@nextui-org/react"
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
export default function TrainerLogin(){
    const router = useRouter()
  const [data,setData] = useState({
    email:"",
    password:""

});
axios.defaults.withCredentials = true; 
const handleChange = (e:any)=>{
  setData(prev=>({...prev, [e.target.name]: e.target.value}));
}
const handleClick = async (e: any) =>{
  console.log("entered in handle submit")
  e.preventDefault()
  try{
    // console.log("entered into try")
    const val = await axios.post("http://localhost:9900/trainerlogin",data).then(res =>{
      console.log("data is", res.data)
      if(res.data ==="NoUser"){
        alert("Invalid Email Id")
        location.reload();
      }
      else
      {
        if(res.data !=="invalid"){
        router.push("/trainerdash")
      }
      else{
        alert("Invalid Password")
      }
    }
    })
    console.log(val)
  } catch(err){
    console.log(err)
  }
}
console.log(data);
    return(
        <>
        {/* <Navbar/> <Divider/> */}
        <div className="login-box">
        
            <form>
            <div className="user-box">
                <input type="text" name="email" required onChange={handleChange}/>
                <label>Email-Id</label>
            </div>
            {/* <div className="user-box">
                <input type="password" name="" required/>
                <label></label>
            </div> */}
            <div className="user-box">
                <input type="password" name="password" required onChange={handleChange}/>
                <label>Password</label>
            </div><center>
                <button onClick={handleClick}>

            <a>
                    Login
                <span></span>
            </a>
                </button>
            </center>
            </form>
        </div>
        </>
    )
}