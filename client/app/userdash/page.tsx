"use client"
import CardDataStats from "@/components/CardDataStats";
import WeightChart from "@/components/ChartThree";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function userDash(){
    const [username,setName] = useState('')
  const [message,setMessage] = useState('')
//   const [auth,setAuth] = useState(false)
  const [age,setAge] = useState('')
  const router = useRouter()
  useEffect(()=>{
    axios.get('http://localhost:9900/toke').then(res=>{
      if(res.data.Status === "Success"){
        // setAuth(true)
        setName(res.data.name)
        // setAge(res.data.age)
      } else {
        setMessage(res.data.Message)
      }
    })
  })
  useEffect(()=>{
    axios.get('http://localhost:9900/age').then(res=>{
      if(res.data.Status === "Success"){
        setAge(res.data.age)
        // console.log(res.data.age)
      } else {
        setMessage(res.data.Message)
      }
    })
  },[])
    return(
        <>
            {/* <h1>Welcome to Fitness Hub</h1> */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">

            <CardDataStats title="Age" name={username} age={age} levelUp>
            <svg
            className="fill-primary dark:fill-white"
            width="45"
            height="40"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
             <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
             <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>

          </svg>
          {/* <h1>Welome to card 1</h1> */}
            </CardDataStats>
              </div>
              {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <WeightChart/>
              </div> */}
        </>
    )
}