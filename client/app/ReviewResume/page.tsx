"use client"
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import DefaultLayout from '../admindash/layout';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Link} from "@nextui-org/react";

function ReviewTrainerResume() { 
    const [data,setData] = useState([])
    useEffect(()=>{
      console.log("entered in setdata")
        const fetchAllData = async ()=>{
            try{
                const res = await axios.get("http://localhost:9900/showTrainerResume")
                setData(res.data)
                console.log("user details in admin is",data) 
            }catch(e){
                console.log(e);
            }
        }
        fetchAllData()  
    },[])
    const handleDelete = async (id:any)=>{
        try{
            await axios.delete("http://localhost:9900/deleteResumeTrainer/"+id)
            alert("Request Deleted")
            // router.push('/admindash')
            // router.push('/AllMeeting')
            // window.location.reload()
            
        } catch(err){
            console.log(err)
        }
    }
  return (
    <>
    <DefaultLayout>
        <Breadcrumb pageName='Review Trainer Resume' />
        <div style={{width:"75%"}}>

        <Table aria-label="Example static collection table" >
      <TableHeader>
        <TableColumn>Trainer Name</TableColumn>
        <TableColumn>Trainer E-Mail</TableColumn>
        <TableColumn>Trainer Age</TableColumn>
        <TableColumn>Trainer Resume</TableColumn>
        <TableColumn>Delete Request</TableColumn>
      </TableHeader>
      <TableBody>
      {data.map(data=>(
          <TableRow>
              <TableCell>{data.trainername}</TableCell>
              <TableCell>{data.traineremail}</TableCell>
              <TableCell>{data.trainerage}</TableCell>
              <TableCell>
              <Link
					isExternal
                    // isDisabled
					// className={buttonStyles({ color:"primary", variant: "shadow", radius: "full",  })}
					href={data.resumeroot}
					>
					View
				</Link> &nbsp;
              </TableCell>
            <TableCell>
        <Button style={{background:"transparent"}} onClick={()=>handleDelete(data.idtrainerrequest)}>Delete</Button>
        </TableCell>
        </TableRow>
          ))} 
      </TableBody>
    </Table>
    </div>
    </DefaultLayout>
    </>
  )

}

export default ReviewTrainerResume