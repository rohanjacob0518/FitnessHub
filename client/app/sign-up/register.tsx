"use client"
import React, { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Input,Button,
    RadioGroup, Radio,Select, SelectItem,

} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Register() {
  const router = useRouter()
  const [data,setData] = useState({
    name :"",
    dob:"",
    email:"",
    gender:"",
    age:null,
    contact:"",
    password:"",
    weight:null,
    height:null,
    activity:""

});
const exercise =[
  {label:"Little or No Exercise",value:"1.2"},
  {label:"Light Exercise/Sports 1-3 Days​/Week",value:"1.375"},
  {label:"Moderate Exercise/Sports 3-5 Days/Week",value:"1.55"},
  {label:"Hard Exercise/Sports 6-7 days a Week",value:"1.725"},
  {label:"Very hard exercise/sports & physical job or 2x training",value:"1.9"},
]

const handleChange = (e:any)=>{
  setData(prev=>({...prev, [e.target.name]: e.target.value}));
}
const handleClick = async (e: any) =>{
  e.preventDefault()
  try{
    await axios.post("http://localhost:9900/register", data)
    alert("registered successfully")
    router.push("/login")
  } catch(err){
    console.log(err)
  }
}
console.log(data);
  return (
      <center>
    <Card className="max-w-[600px]">

      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
        <h2>User Register</h2> <br />
          
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
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
            type="date"
            label="Date of Birth" 
            className="max-w-xs"
            placeholder="Enter date of birth"
            onChange={handleChange}
            name="dob"
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
            type="number"
            label="Age"
            className="max-w-xs"
            placeholder="Enter the age"
            name="age"
            onChange={handleChange}
        /> <br />
        <Input
            isRequired
            type="text"
            label="Contact"
            className="max-w-xs"
            placeholder="Contact Number"
            name="contact"
            onChange={handleChange}
            /> <br />
            <Select
              label="Exercise"
              placeholder="Activity"
              // className="max-w-xs"
              style={{width:"70%"}}
              name="activity"
              onChange={handleChange}
            >
              {exercise.map((exercise) => (
                <SelectItem key={exercise.value} value={exercise.value}>
                  {exercise.label}
                </SelectItem>
              ))}
            </Select> <br /><br />
        <Input
            isRequired
            type="password"
            label="Password"
            className="max-w-xs"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
            /> <br />
             
        <Input
            isRequired
            type="number"
            label="Weight"
            className="max-w-xs"
            placeholder="Enter the weight"
            name="weight"
            onChange={handleChange}
            /> <br />
             
        <Input
            isRequired
            type="number"
            label="Height"
            className="max-w-xs"
            placeholder="Enter the height"
            name="height"
            onChange={handleChange}
            /> <br />
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" type="button"
          // onClick={() => router.push("/login")}
          onClick={handleClick}
          >
            Register
        </Button>
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
      </center>
  );
}
