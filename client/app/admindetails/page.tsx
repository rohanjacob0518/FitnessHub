"use client"
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import BreadcrumbExtend from '@/components/Breadcrumb/Breadcrumbnew'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AdminDetails() {
    const [data,setData] = useState([])
    useEffect(()=>{
      console.log("entered in setdata")
        const fetchAllData = async ()=>{
            try{
                const res = await axios.get("http://localhost:9900/showAdminDetails")
                setData(res.data)
                console.log("user details in admin is",data) 
            }catch(e){
                console.log(e);
            }
        }
        fetchAllData()  
    },[])
  return (
    <>
        {/* <Breadcrumb pageName="Admin Details" /><br /><br /> */}
        <BreadcrumbExtend pageName="Admin Details"/>
        <div style={{width:"80%"}}>

        <Table aria-label="Example static collection table" >
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Admin E-Mail</TableColumn>
        <TableColumn>Gender</TableColumn>
      </TableHeader>
      <TableBody>
      {data.map(data=>(
          <TableRow>
              <TableCell>{data.adminname}</TableCell>
              <TableCell>{data.adminemail}</TableCell>
              <TableCell>{data.gender}</TableCell>
        </TableRow>
          ))} 
      </TableBody>
    </Table>
          </div>
    </>
  )
}

export default AdminDetails