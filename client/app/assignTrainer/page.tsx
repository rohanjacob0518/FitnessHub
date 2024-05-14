"use client"
import React, { useEffect, useState } from 'react'
import DefaultLayout from '../admindash/layout'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import axios from 'axios'
import {Input,Select, SelectItem,RadioGroup, Radio} from "@nextui-org/react";
import { useRouter } from 'next/navigation'

function AssignTrainer() {
    // fetchUserEmail
    const [email,setEmail] = useState([])
    useEffect(()=>{
      console.log("entered in setdata")
        const fetchEmail = async ()=>{
            try{
                const res = await axios.get("http://localhost:9900/showUserEmail")
                setEmail(res.data)
                console.log(email) 
            }catch(e){
                console.log(e);
            }
        }
        fetchEmail()  
    },[])
    // fetchTrainerEmail
    const [temail,setTrainerEmail] = useState([])
    useEffect(()=>{
      console.log("entered in setdata")
        const fetchTrainerEmail = async ()=>{
            try{
                const res = await axios.get("http://localhost:9900/showTrainerEmail")
                setTrainerEmail(res.data)
                // console.log(email) 
            }catch(e){
                console.log(e);
            }
        }
        fetchTrainerEmail()  
    },[])
    // getDataInConsole
    const router = useRouter()
    const [formdata,setFormData] = useState({
        useremail:"",
        traineremail:""
    });
    const handleChange = (e:any)=>{
        setFormData(prev=>({...prev, [e.target.name]: e.target.value}));
      }
      const handleClick = async (e: any) =>{
        e.preventDefault()
        try{
          await axios.post("http://localhost:9900/assignTrainer", formdata)
          alert("Assigned user to trainer")
          // toast.success("Meeting Scheduled")
          // notify();
          router.push("/admindash")
        } catch(err){
          console.log(err)
        }
      }
      console.log(formdata);
  return (
    <>
    <DefaultLayout>
        <Breadcrumb pageName='Assign Trainer'/>
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Assign Trainer to Users
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      
                      <div className="relative">
                      <Select
                        label="Select User Email"
                        placeholder="Select email"
                        className="max-w-xs"
                        name='useremail'
                        onChange={handleChange}
                        >
                        {email.map(email => (
                            <SelectItem 
                            key={email.useremail}
                            // key={email.iduser}
                            // value={email.useremail}
                            >
                            {email.useremail}
                            </SelectItem>
                        ))}
                        </Select>
                      
                      </div>
                    </div>
                    </div>
                    <br />
                    <div className="w-full sm:w-1/2">
                    <Select
                        label="Select Trainer Email"
                        placeholder="Select email"
                        className="max-w-xs"
                        name='traineremail'
                        onChange={handleChange}
                        >
                        {temail.map(temail => (
                            <SelectItem key={temail.traineremail}>
                            {temail.traineremail}
                            </SelectItem>
                        ))}
                        </Select>

                    </div>
                  <br />
                  <div className="flex  gap-4.5">
                    <button
                      className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                      onClick={handleClick}
                      >
                      Assign
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </DefaultLayout>
    </>
  )
}

export default AssignTrainer