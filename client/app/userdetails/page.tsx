"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import BreadcrumbExtend from "@/components/Breadcrumb/Breadcrumbnew";
import { useRouter } from "next/navigation";
export default function UserDetails(){
    const [data,setData] = useState([])
    const router = useRouter()
    useEffect(()=>{
      console.log("entered in setdata")
        const fetchAllData = async ()=>{
            try{
                const res = await axios.get("http://localhost:9900/showUserDetails")
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
            await axios.delete("http://localhost:9900/deleteuser/"+id)
            // window.location.reload()
            router.push("/admindash")
        } catch(err){
            console.log(err)
        }
    }
    return(
        <>
        <BreadcrumbExtend pageName="User Details"/>
        <div style={{width:"85%"}}>
          
        <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>E-Mail</TableColumn>
        <TableColumn>Date of Birth</TableColumn>
        <TableColumn>Age</TableColumn>
        <TableColumn>Contact</TableColumn>
        <TableColumn>Gender</TableColumn>
        <TableColumn>Button</TableColumn>
      </TableHeader>
      <TableBody>
      {data.map(data=>(
        <TableRow>
              <TableCell>{data.username}</TableCell>
              <TableCell>{data.useremail}</TableCell>
              <TableCell>{data.dob}</TableCell>
              <TableCell>{data.age}</TableCell>
              <TableCell>{data.contact}</TableCell>
              <TableCell>{data.gender}</TableCell>
              <TableCell> 
                {/* <button className='delete' onClick={()=>handleDelete(books.id)}>Delete</button> */}
              <Button color="danger" onClick={()=>handleDelete(data.iduser)}>
                
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
              </svg>
              </Button>
              {/* <Button color="warning">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
            </svg>
              </Button>  */}
              </TableCell>
        </TableRow>
          ))} 
      </TableBody>
    </Table>
        
          </div>
        </>
    )
}
