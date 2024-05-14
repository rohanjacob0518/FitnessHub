import { Navbar } from "@/components/navbar";
import Register from "./register";
import { Divider } from "@nextui-org/react";

export default function SignUp(){
    return(
        <>
        {/* <Navbar /><Divider/>  */}
        <Navbar/><Divider/>
        <br /><br /><br />
        <Register/>
        </>
    )
}