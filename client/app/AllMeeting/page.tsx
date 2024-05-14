"use client"
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Link} from "@nextui-org/react";
import { useRouter } from 'next/navigation';

function AllScheduledMeeting() {
  const router = useRouter()
    const [data,setData] = useState([])
    useEffect(()=>{
      console.log("entered in setdata")
        const fetchAllData = async ()=>{
            try{
                const res = await axios.get("http://localhost:9900/showAllMeetings")
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
          await axios.delete("http://localhost:9900/deleteSchedule/"+id)
          alert("Meeting Deleted")
          router.push('/admindash')
          // router.push('/AllMeeting')
          // window.location.reload()
          
      } catch(err){
          console.log(err)
      }
  }
  return (
    <>
    <Breadcrumb pageName="All Meetings Scheduled" /><br /><br />
    {/* <div>AllScheduledMeeting</div> */}
    <div style={{width:"75%"}}>

    <Table aria-label="Example static collection table" >
      <TableHeader>
        {/* <TableColumn>Session Id</TableColumn> */}
        <TableColumn>User E-Mail</TableColumn>
        <TableColumn>Trainer E-Mail</TableColumn>
        <TableColumn>Meeting Date</TableColumn>
        <TableColumn>Meeting Time</TableColumn>
        {/* <TableColumn>Time Limit</TableColumn> */}
        <TableColumn>Room Name</TableColumn>
        <TableColumn>Button</TableColumn>
      </TableHeader>
      <TableBody>
      {data.map(data=>(
        <TableRow>
              {/* <TableCell>{data.sessionid}</TableCell> */}
              <TableCell>{data.useremail}</TableCell>
              <TableCell>{data.traineremail}</TableCell>
              <TableCell>{data.date}</TableCell>
              <TableCell>{data.time}</TableCell>
              {/* <TableCell>{data.limit}</TableCell> */}
              <TableCell>{data.roomname}</TableCell>
              <TableCell> 
                {/* <button className='delete' onClick={()=>handleDelete(books.id)}>Delete</button> */}
                <Link
					isExternal
          // isDisabled
					// className={buttonStyles({ color:"primary", variant: "shadow", radius: "full",  })}
					href={"http://localhost:3000/room"}
					>
					Join
				</Link> &nbsp;
        <Button style={{background:"transparent"}} onClick={()=>handleDelete(data.sessionid)}>
                
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
              </svg>
              </Button> &nbsp;&nbsp;
              </TableCell>
        </TableRow>
          ))} 
      </TableBody>
    </Table>
          </div>
    </>
  )
}

export default AllScheduledMeeting