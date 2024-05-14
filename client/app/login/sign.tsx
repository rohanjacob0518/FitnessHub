"use client"
import React, { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Input,Button, Tooltip} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Sign() {
  const router = useRouter();
  const [data,setData] = useState({
    email :"",
    pass:""

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
    const val = await axios.post("http://localhost:9900/login",data).then(res =>{
      console.log("data is", res.data)
      if(res.data ==="NoUser"){
        alert("Invalid Email Id")
        location.reload();
      }
      else
      {
      if(res.data !=="invalid"){
        router.push("/userdash")
      }
      else{
        alert("Invalid Password")
      }
  }})
    console.log(val)
    // alert(val)
    // console.log(val)
  } catch(err){
    console.log(err)
  }
}
console.log(data);
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
        <h2>Login</h2> <br />
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <form
        action=""
        >
        <Input
            isRequired
            type="email"
            label="Email"
            className="max-w-xs"
            placeholder="Enter the email-id"
            name="email"
            id="email"
            onChange={handleChange}
        /> <br />
        <Input
            isRequired
            type="password"
            label="Password"
            className="max-w-xs"
            placeholder="Enter the password"
            name="pass"
            id="pass"
            onChange={handleChange}
        /> <br />
        <Tooltip placement="right" content="Press to login">
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          // onClick={() => router.push("/userdash")} 
          onClick={handleClick}
          type="submit"
        >
            Login
        </Button>
        </Tooltip>
        </form>
      </CardBody>
      {/* <Divider/> */}
      {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
    </Card>
  );
}
