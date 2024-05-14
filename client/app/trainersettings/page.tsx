
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/trainerlayout/dashLayout";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {Input} from "@nextui-org/react";


export const metadata: Metadata = {
  title: "FitnessHub",
  description:
    "Welcome to fitnessHub",
};

const Settings = () => {
  return (
    // <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Settings" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Update Personal Information
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      
                      <div className="relative">
                        
                      <Input
                        type="Name"
                        label="name"
                        className="max-w-xs"
                        placeholder="Enter the name"
                        name="name"
                     /> 
                      </div>
                    </div>
                    </div>
                    <br />
                    <div className="w-full sm:w-1/2">
                       <Input
                            type="text"
                            label="Phone Number"
                            className="max-w-xs"
                            placeholder="Enter the phone number"
                            name="phnumber"
                        /> 
                    </div>
                  <br />
                  <div className="mb-5.5">
                    
                    <div className="relative">
                      
                    <Input
                            type="email"
                            label="E-mail"
                            className="max-w-xs"
                            placeholder="Enter the e-mail"
                            name="email"
                        /> 
                    </div>
                  </div>
                  <br />
                  <div className="mb-5.5">
                    
                    <div className="relative">
                    <Input
                            type="password"
                            label="Old Password"
                            className="max-w-xs"
                            placeholder="Enter the old password"
                            name="olpass"
                        /> 
                    </div>
                  </div>
                  <br />
                  <div className="mb-5.5">
                    
                    <div className="relative">
                    <Input
                            type="password"
                            label="New Password"
                            className="max-w-xs"
                            placeholder="Enter the old password"
                            name="newpass"
                        /> 
                    </div>
                  </div>
                  <br /><br />
                  <div className="flex justify-center gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                      >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                      >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </DefaultLayout>
  );
};

export default Settings;
