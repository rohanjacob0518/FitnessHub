import DefaultLayout from "@/app/userdash/layout";
import Calendar from "./calendar";

export default function ShowCalendar() {
  return (
      <div 
      style={{
        height:"320px"
      }}>
        {/* <DefaultLayout> */}
        <Calendar/>
        {/* </DefaultLayout> */}
      </div>
  )
}
