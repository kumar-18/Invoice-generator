import {Button} from "react-bootstrap";
import InvoiceGenerator from "./invoice-generator";
import React,{useState} from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function Buttons(){

    const [open,setOpen]=useState(false);
    let data={
        CompanyDetails:{
        CompanyName:"Max Electronics",
        Address:"A 204, Shivaji Nagar, Hyderabad",
        GSTIN: "29AAAHUJDPEKDUJ",
        StateName: "Telangana", 
        Code: 29,
        Contact: 9876543210,
        EMail:" Max@gurueIectronics.com",
        Website:"www.maxeIecIronics.com"
        },
        DispatchAddress:{
        CompanyName:"Hi-Tech Computer World",
        Address:"361, City plaza",
        Street:"MG Road",
        City:"Hyderabad",
        GSTIN:"29AAAHUJDPEKDUJ",
        StateName:"Telangana",
        Code:29
        },
        InvoiceTo:{
        CompanyName:"Hi-Tech Computer World",
        Address:"361, City plaza",
        Street:"MG Road",
        City:"Hyderabad",
        GSTIN:"29AAAHUJDPEKDUJ",
        StateName:"Telangana",
        Code:29
        },

    }

    return(
        <>

            {!open && <Button onClick={()=>open?setOpen(false):setOpen(true)}>{!open?"View Invoice":"Close View"}</Button>}
            {open &&
            <Pdf targetRef={ref} filename="invoice.pdf">
                {({ toPdf }) => <Button className="m-5" onClick={toPdf}>Download Invoice</Button>}
            </Pdf>}
            {open && <Button onClick={()=>open?setOpen(false):setOpen(true)}>Back</Button>}
            {open && <div ref={ref}>
            <InvoiceGenerator data={data}/>
            </div>}
           
            <div>
            </div>
            
        </>
    )
}
export default Buttons;
