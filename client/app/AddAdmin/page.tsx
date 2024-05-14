"use client"
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import DefaultLayout from '../admindash/layout'
import React, { useState } from "react";
import { toast } from 'react-toastify';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Input,Button,
    RadioGroup, Radio

} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import axios from 'axios';

function AddAdmin() {
  const router = useRouter()
  const [data,setData] = useState({
    name :"",
    email:"",
    gender:"",
    password:""

});

const handleChange = (e:any)=>{
  setData(prev=>({...prev, [e.target.name]: e.target.value}));
}
const handleClick = async (e: any) =>{
  e.preventDefault()
  try{
    await axios.post("http://localhost:9900/adminRegister", data)
    alert("Admin registered successfully")
    router.push("/admindash")
  } catch(err){
    console.log(err)
  }
}
console.log(data);
  return (
    <>
    <DefaultLayout>

    <Breadcrumb pageName='Add Admin'/>
    
    <form action="">
        <Input
            isRequired
            type="text"
            label="Name"
            className="max-w-xs"
            placeholder="Enter the name"
            name="name"
            onChange={handleChange}
        /> <br />
        <Input
            isRequired
            type="email"
            label="Email"
            className="max-w-xs"
            placeholder="Enter the email-id"
            name="email"
            onChange={handleChange}
            /> <br />
        <RadioGroup
            isRequired
            label="Gender"
            name="gender"
            onChange={handleChange}
            >
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="others">Others</Radio>
        </RadioGroup> <br />
        <Input
            isRequired
            type="password"
            label="Password"
            className="max-w-xs"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
            /> <br />
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" type="button"
          // onClick={() => router.push("/login")}
          onClick={handleClick}
          
          >
            Add Admin
        </Button>
        </form>
    </DefaultLayout>
    
    </>
  )
}

export default AddAdmin