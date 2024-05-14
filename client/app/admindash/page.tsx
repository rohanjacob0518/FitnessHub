"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import { string } from "zod";
import { Toaster, toast } from 'sonner'

export default function AdminDash(){
    const [data,setData] = useState([])
    useEffect(()=>{
      // console.log("entered in setdata")
        const fetchAllData = async ()=>{
          // console.log("entered in fetchall")
            try{
                const res = await axios.get("http://localhost:9900/showAssign")
                setData(res.data)
                console.log("user details in admin is",data) 
            }catch(e){
                console.log(e);
            }
        }
        fetchAllData()  
    },[])
    return(
        <>
        {/* <h1>This is admin dash</h1> */}
        <div style={{width:"75%"}}>
            {/* <Toaster />
            <Button onClick={() => toast.success('My first toast')}>
            Give me a toast
        </Button> */}
        <h3>Assigned Trainer</h3><br /><br /> 
            <Table aria-label="Example static collection table">
      <TableHeader>
        {/* <TableColumn>NAME</TableColumn> */}
        <TableColumn>User Email</TableColumn>
        <TableColumn>Trainer EMail</TableColumn>
        {/* <TableColumn>Date of Birth</TableColumn>
        <TableColumn>Age</TableColumn>
        <TableColumn>Contact</TableColumn>
      <TableColumn>Gender</TableColumn> */}
      </TableHeader>
      <TableBody>
      {data.map(data=>(
        <TableRow>
              <TableCell>{data.useremail}</TableCell>
              <TableCell>{data.traineremail}</TableCell>
              {/* <TableCell>{data.dob}</TableCell>
              <TableCell>{data.age}</TableCell>
              <TableCell>{data.contact}</TableCell>
            <TableCell>{data.gender}</TableCell> */}
        </TableRow>
          ))} 
      </TableBody>
    </Table>
        </div>
        </>
    )
}