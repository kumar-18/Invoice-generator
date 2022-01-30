import "../../index.css"
function InvoiceGenerator(){
    return(
        <>
            <div className="main-container">
            <div className="sales-container m-5 py-3">
                <h4 className="text-center">SALES ORDER</h4>
                <div className="invoice-body m-2">
                    <table className="invoice-table"> 
                        <tbody>
                            <tr>
                                <td className="address" colSpan="3" rowSpan="3">
                                    <h6><b>Max Electronics</b></h6>
                                    <p>A 204, Shivaji Nagar, Hyderabad</p>
                                    <p>GSTIN/UIN: 29AAAHUJDPEKDUJ</p>
                                    <p>State Name: Telangana, Code: 29</p>
                                    <p>Contact: 9876543210</p>
                                    <p>E -Mail : Max@gurueIectronics.com</p>
                                    <p>www.maxeIecIronics.com</p>
                                    </td>
                                <td className="date-details" colSpan="3">
                                    <p>Voucher No.<br></br><b>1</b></p>
                                </td>
                                <td colSpan="3">
                                    <p>Dated<br></br><b>30-01-2022</b></p>
                                </td>
                            </tr>
                            <tr>
                                <td className="date-details" colSpan="3">
                                   
                                </td>
                                <td colSpan="3">
                                <p>Mode/Terms of payment<br></br><b>15v days via cheque</b></p>
                                </td>
                            </tr>
                            <tr>
                                <td className="date-details" colSpan="3">
                                    <p>Buyer's Ref/Order No<br></br><b>1</b></p>
                                </td>
                                <td colSpan="3">
                                    <p>Other Reference(s)<br></br><b></b></p>
                                </td>
                            </tr>
                            <tr>
                                <td className="address" colSpan="3" rowSpan="3">
                                    <p>Dispatch To</p>
                                    <h6><b>Hi-Tech Computer World</b></h6>
                                    <p>361, City plaza</p>
                                    <p>MG Road</p>
                                    <p>Hyderabad</p>
                                    <p>GSTIN/UIN &nbsp;: 29AAAHUJDPEKDUJ</p>
                                    <p>State Name  : Telangana, Code: 29</p>
                                    </td>
                                <td className="date-details" colSpan="3">
                                    <p>Dispatch Through<br></br><b>By Road</b></p>
                                </td>
                                <td className="date-details" colSpan="3">
                                    <p>Destination<br></br><b></b></p>
                                </td>
                            </tr>
                            <tr>
                                <td className="date-details" colSpan="6" rowSpan="5">
                                    <p>Terms of Delivery<br></br><b>Ex-factory Delivery</b></p>
                                </td>
                                
                            </tr>
                            <tr>
                         
                            </tr>
                            <tr>
                                <td className="address" colSpan="3" rowSpan="3">
                                    <p>Invoice To</p>
                                    <h6><b>Hi-Tech Computer World</b></h6>
                                    <p>361, City plaza</p>
                                    <p>MG Road</p>
                                    <p>Hyderabad</p>
                                    <p>GSTIN/UIN &nbsp;: 29AAAHUJDPEKDUJ</p>
                                    <p>State Name  : Telangana, Code: 29</p>
                                </td>
                                <td className="date-details" colSpan="3">
                                </td>
                                
                            </tr>
                            <tr>
                              
                            </tr>
                            <tr>
                                
                            </tr>

                            <tr className="purchase-details">
                                    <td>S.No</td>
                                    <td>Description of goods</td>
                                    <td>HSN/SAC</td>
                                    <td>Due On</td>
                                    <td>Quantity</td>
                                    <td>Rate</td>
                                    <td>per</td>
                                    <td>Amount</td>
                            </tr>
                            <tr>
                                    <td>1</td>
                                    <td><b>Asus 16.6 inch monitor</b></td>
                                    <td>8471</td>
                                    <td><i>3 Days</i></td>
                                    <td><b>10 Nos</b></td>
                                    <td>7,000.00</td>
                                    <td>Nos</td>
                                    <td>70,000.00</td>
                                </tr>
                                
                                <tr>
                                    <td>2</td>
                                    <td><b>Asus 16.6 inch monitor</b></td>
                                    <td>8471</td>
                                    <td><i>3 Days</i></td>
                                    <td><b>10 Nos</b></td>
                                    <td>8,000.00</td>
                                    <td>Nos</td>
                                    <td>80,000.00</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>1,50,000.00</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </>
    )
}
export default InvoiceGenerator;