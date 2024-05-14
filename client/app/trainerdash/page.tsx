"use client"
import CardDataStats from "@/components/CardDataStats";
import DefaultLayout from "@/components/trainerlayout/dashLayout";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Link} from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { button as buttonStyles } from "@nextui-org/theme";
export default function userDash(){


  // const[auth, setAuth] = useState(false)
    const [data,setData] = useState([])
    useEffect(()=>{
      console.log("entered in setdata")
        const fetchAllData = async ()=>{
            try{
                const res = await axios.get("http://localhost:9900/showTrainerassign")
                setData(res.data)
                // setAuth(true)
                console.log(data) 
            }catch(e){
                console.log(e);
            }
        }
        fetchAllData()  
    },[])
    const router = useRouter()
    return(
        <>
        <div>
{/* {
          auth ? */}
    <DefaultLayout>
    <h3>Users Assigned</h3><br /><br /> 
    <div style={{width:"75%"}}>

            <Table aria-label="Example static collection table">
      <TableHeader>
        {/* <TableColumn>NAME</TableColumn> */}
        <TableColumn>Trainer EMail</TableColumn>
        {/* <TableColumn>Date of Birth</TableColumn>
        <TableColumn>Age</TableColumn>
        <TableColumn>Contact</TableColumn>
      <TableColumn>Gender</TableColumn> */}
        <TableColumn>User Email</TableColumn>
      </TableHeader>
      <TableBody>
      {data.map(data=>(
        <TableRow>
              <TableCell>{data.traineremail}</TableCell>
              <TableCell>{data.useremail}</TableCell>
              {/* <TableCell>{data.dob}</TableCell>
              <TableCell>{data.age}</TableCell>
              <TableCell>{data.contact}</TableCell>
            <TableCell>{data.gender}</TableCell> */}
        </TableRow>
          ))} 
      </TableBody>
    </Table>
    </div>
    </DefaultLayout>
    </div>
        </>
    )
}