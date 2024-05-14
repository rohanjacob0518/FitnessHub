import { Navbar } from "@/components/navbar";
import Sign from "./sign";
import { Divider } from "@nextui-org/react";


export default function Login(){
    return(
        <>
        <Navbar/><Divider/>
        <center>
            <br /><br /><br />
            <Sign/>
        </center>
        </>
    )
}