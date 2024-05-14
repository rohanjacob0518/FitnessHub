
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/dashLayout";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ShowWorkPage from "../workout/page";
export const metadata: Metadata = {
    title: "FitnessHub",
    description:
      "Welcome to fitnessHub",
  };
export default function VideoConf(){
    return(
      <>
        {/* <DefaultLayout> */}
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Workout Regimens" />
        <div>
          <ShowWorkPage/>
        </div>
        </div>
        
        </>
    )
}