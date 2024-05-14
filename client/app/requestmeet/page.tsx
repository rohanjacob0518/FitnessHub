"use client"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {Input,Textarea} from "@nextui-org/react";
import axios from "axios";
import { Metadata } from "next";
import moment from 'moment';
import { useRouter } from "next/navigation";
import { useState } from "react";
const RequestPage = () => {
  const router = useRouter()
  const [data,setData] = useState({
    email:"",
    meetdate:"",
    comment:""

});

const handleChange = (e:any)=>{
  setData(prev=>({...prev, [e.target.name]: e.target.value}));
}
const handleClick = async (e: any) =>{
  console.log("entered in handle submit")
  e.preventDefault()
  try{
    // console.log("entered into try")
    const val = await axios.post("http://localhost:9900/requestmeet",data).then(res =>{
      console.log("data is", res.data)
      alert("Request send successfully!")
      router.push("/userdash")
      // window.location.reload()
      // router.push("/userdash")
    })
    console.log(val)
  } catch(err){
    console.log(err)
  }
}
const  currentDate = moment().format('YYYY-MM-DD');
// console.log(currentDate);
console.log(data);
  return (  
    <>
      <Breadcrumb pageName="Request Meet" />

      {/* <ShowCalendar/> */}

      <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Request for a meeting
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      
                      <div className="relative">
                        
                      <Input
                        type="text"
                        label="Enter your email"
                        className="max-w-xs"
                        placeholder="E-Mail"
                        name="email"
                        required
                        onChange={handleChange}
                     /> 
                      </div>
                    </div>
                    </div>
                    <br />
                  <div className="mb-5.5">
                    
                    <div className="relative">
                    <Input
                            type="date"
                            label="Meeting Date"
                            className="max-w-xs"
                            min={currentDate}
                            placeholder="Enter date"
                            name="meetdate"
                            required
                            onChange={handleChange}
                        /> 
                    </div>
                  </div>
                  <br />
                  <div className="mb-5.5">
                    
                    <div className="relative">
                    <Textarea
                      label="Comment"
                      placeholder="Enter your comment"
                      className="max-w-xs"
                      name="comment"
                      onChange={handleChange}
                    />
                    </div>
                  </div>
                  <br /><br />
                  {/* <div className="flex justify-center gap-4.5"> */}
                    {/* <button
                      className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                      >
                      Cancel
                    </button> */}
                    <button
                      className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                      onClick={handleClick}
                      >
                      Request
                    </button>
                  {/* </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default RequestPage;
