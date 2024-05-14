"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import React from 'react'
import { useRouter } from "next/navigation";

function ShowRequest() {
  const router = useRouter()
  const [data,setData] = useState([])
  useEffect(()=>{
    // console.log("entered in setdata")
      const fetchAllData = async ()=>{
        // console.log("entered in fetchall")
          try{
              const res = await axios.get("http://localhost:9900/showUserRequest")
              setData(res.data)
              console.log("user details in admin is",data) 
          }catch(e){
              console.log(e);
          }
      }
      fetchAllData()  
  },[])
  const handleDelete = async (requestid:any)=>{
      try{
          await axios.delete("http://localhost:9900/deleteRequest/"+requestid)
          // window.location.reload()
          alert("Request Deleted")
          router.push("/admindash")
      } catch(err){
          console.log(err)
      }
  }
  return (
    <>
    <Breadcrumb pageName="Show Request" />
    <div>User Request</div><br />
    <div style={{width:"80%"}}>

    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>User E-mail Id</TableColumn>
        <TableColumn>Date</TableColumn>
        <TableColumn>Comment</TableColumn>
        {/* <TableColumn>Date of Birth</TableColumn>
        <TableColumn>Age</TableColumn>
        <TableColumn>Contact</TableColumn> */}
        <TableColumn>Button</TableColumn>
      </TableHeader>
      <TableBody>
      {data.map(data=>(
        <TableRow>
              <TableCell>{data.requestemail}</TableCell>
              <TableCell>{data.meetdate}</TableCell>
              <TableCell>{data.comment}</TableCell>
              {/* <TableCell>{data.age}</TableCell>
              <TableCell>{data.contact}</TableCell>
              <TableCell>{data.gender}</TableCell> */}
              <TableCell> 
              <Button color="danger" 
              onClick={()=>handleDelete(data.requestid)}
              >
                
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
              </svg>
              </Button> &nbsp;&nbsp;
              
              </TableCell>
        </TableRow>
          ))} 
      </TableBody>
    </Table> <br /><br />
    </div>
    {/* <div>Trainer Request</div><br /> */}
    </>
  )
}

export default ShowRequest