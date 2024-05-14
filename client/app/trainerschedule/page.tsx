"use client"
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Link} from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";
import DefaultLayout from '@/components/trainerlayout/dashLayout';
function TrainerSchedule() {
    const [userEmail,setEmail] = useState('')
  const [schedule,setSchedule] = useState([])
//   useEffect(()=>{
//     console.log("entered in setMessage")
//     axios.get('http://localhost:9900/userEmail').then(res=>{
//       if(res.data.Status === "Success"){
//         setEmail(res.data.userEmail)
//       } else {
//         // setMessage(res.data.Message)
//       }
//     })
//   },[])
  // getScheduleData
  useEffect(()=>{
    console.log("entered in setdata")
      const fetchAllData = async ()=>{
          try{
              const res = await axios.get("http://localhost:9900/showTrainerSchedule")
              setSchedule(res.data)
              // console.log(res.data)
              console.log("data is",schedule) 
          }catch(e){
              console.log(e);
          }
      }
      fetchAllData()  
  },[])
  return (
    <>
    <DefaultLayout>
     <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Scheduled Meet" />
        <div style={{width:"80%"}}>

        <Table aria-label="Example static collection table">
      <TableHeader>
        {/* <TableColumn>Session Id</TableColumn> */}
        <TableColumn>Trainer E-Mail</TableColumn>
        <TableColumn>User E-Mail</TableColumn>
        <TableColumn>Date</TableColumn>
        <TableColumn>Time</TableColumn>
        {/* <TableColumn>Time Limit</TableColumn> */}
        <TableColumn>Button</TableColumn>
      </TableHeader>
      <TableBody>
      {schedule.map(data=>(
        <TableRow>
              {/* <TableCell>{data.sessionid}</TableCell> */}
              <TableCell>{data.traineremail}</TableCell>
              <TableCell>{data.useremail}</TableCell>
              <TableCell>{data.date}</TableCell>
              <TableCell>{data.time}</TableCell>
              {/* <TableCell>{data.limit}</TableCell> */}
              <TableCell> 
              {/* <Button color="warning" href={data.meetlinkuser}>
                
                Join
              </Button>  */}
              <Link
					isExternal
          // isDisabled
					// className={buttonStyles({ color:"primary", variant: "shadow", radius: "full",  })}
					href={data.meetlinktrainerl}
					>
					Join
				</Link>
              </TableCell>
        </TableRow>
          ))} 
      </TableBody>
    </Table>
        </div>
        </div>
        </DefaultLayout>
    </>
  )
}

export default TrainerSchedule