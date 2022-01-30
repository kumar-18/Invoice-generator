import "../../index.css";

function InvoiceGenerator(props) {
  const CompanyDetails=props.data.CompanyDetails;
  const DispatchAddress=props.data.DispatchAddress;
  const InvoiceTo=props.data.InvoiceTo;
  return (
    <>
      <div className="main-container">
        <div className="sales-container m-5 py-3">
          <h4 className="text-center pt-3">SALES ORDER</h4>
          <div className="invoice-body">
            <table className="invoice-table mx-5 mt-5">
              <tbody>
                <tr>
                  <td className="address" colSpan="3" rowSpan="3">
                    <h6>
                      <b>{CompanyDetails.CompanyName}</b>
                    </h6>
                    <p>{CompanyDetails.Address}</p>
                    <p>GSTIN/UIN: {CompanyDetails.GSTIN}</p>
                    <p>State Name: {CompanyDetails.StateName}, Code: {CompanyDetails.Code}</p>
                    <p>Contact: {CompanyDetails.Contact}</p>
                    <p>E -Mail : {CompanyDetails.EMail}</p>
                    <p>{CompanyDetails.Website}</p>
                  </td>
                  <td className="date-details" colSpan="3">
                    <p>
                      Voucher No.<br></br>
                      <b>1</b>
                    </p>
                  </td>
                  <td colSpan="4">
                    <p>
                      Dated<br></br>
                      <b>30-01-2022</b>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="date-details" colSpan="3"></td>
                  <td colSpan="4">
                    <p>
                      Mode/Terms of payment<br></br>
                      <b>15v days via cheque</b>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="date-details" colSpan="3">
                    <p>
                      Buyer's Ref/Order No<br></br>
                      <b>1</b>
                    </p>
                  </td>
                  <td colSpan="4">
                    <p>
                      Other Reference(s)<br></br>
                      <b></b>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="address" colSpan="3" rowSpan="3">
                    <p>Dispatch To</p>
                    <h6>
                      <b>{DispatchAddress.CompanyName}</b>
                    </h6>
                    <p>{DispatchAddress.Address}</p>
                    <p>{DispatchAddress.Street}</p>
                    <p>{DispatchAddress.City}</p>
                    <p>GSTIN/UIN &nbsp;: {DispatchAddress.GSTIN}</p>
                    <p>State Name : {DispatchAddress.StateName}, Code: {DispatchAddress.Code}</p>
                  </td>
                  <td className="date-details" colSpan="3">
                    <p>
                      Dispatch Through<br></br>
                      <b>By Road</b>
                    </p>
                  </td>
                  <td className="date-details" colSpan="4">
                    <p>
                      Destination<br></br>
                      <b></b>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    className="date-details"
                    colSpan="6"
                    rowspan="3"
                    style={{ verticalAlign: "top" }}
                  >
                    <p>
                      Terms of Delivery<br></br>
                      <b>Ex-factory Delivery</b>
                    </p>
                  </td>
                </tr>
                <tr></tr>
                <tr>
                <td className="address" colSpan="3" rowSpan="3">
                    <p>Invoice To</p>
                    <h6>
                      <b>{InvoiceTo.CompanyName}</b>
                    </h6>
                    <p>{InvoiceTo.Address}</p>
                    <p>{InvoiceTo.Street}</p>
                    <p>{InvoiceTo.City}</p>
                    <p>GSTIN/UIN &nbsp;: {InvoiceTo.GSTIN}</p>
                    <p>State Name : {InvoiceTo.StateName}, Code: {InvoiceTo.Code}</p>
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>

                <tr className="purchase-details">
                  <td>S.No</td>
                  <td width="30%">Description of goods</td>
                  <td>HSN/SAC</td>
                  <td>Due On</td>
                  <td>Quantity</td>
                  <td>Rate</td>
                  <td>per</td>
                  <td>Amount</td>
                </tr>
                <tr className="noBorder">
                  <td>1</td>
                  <td>
                    <b>Asus 16.6 inch monitor</b>
                  </td>
                  <td>8471</td>
                  <td>
                    <i>3 Days</i>
                  </td>
                  <td>
                    <b>10 Nos</b>
                  </td>
                  <td>7,000.00</td>
                  <td>Nos</td>
                  <td className="text-end">70,000.00</td>
                </tr>

                <tr className="noBorder">
                  <td>2</td>
                  <td>
                    <b>Asus 16.6 inch monitor</b>
                  </td>
                  <td>8471</td>
                  <td>
                    <i>3 Days</i>
                  </td>
                  <td>
                    <b>10 Nos</b>
                  </td>
                  <td>8,000.00</td>
                  <td>Nos</td>
                  <td className="text-end">80,000.00</td>
                </tr>
                <tr className="noBorder">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="borderTopStyle text-end" >1,50,000.00</td>
                </tr>
                <tr className="noBorder">
                  <td></td>
                  <td className="text-end">
                  <b><i>Central Tax</i></b>
                  </td>
                  <td></td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td></td>
                  <td></td>
                  <td className="text-end"><b>13,500.00</b></td>
                </tr>
                <tr className="noBorder">
                  <td></td>
                  <td className="text-end">
                    <b><i>State Tax</i></b>
                  </td>
                  <td></td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td></td>
                  <td></td>
                  <td className="text-end"><b>13,500.00</b></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-end">Total</td>
                  <td></td>
                  <td></td>
                  <td><b>20 Nos</b></td>
                  <td></td>
                  <td></td>
                  <td className="text-end">1,77,000.00</td>
                </tr>
                <tr className="noBorderRow">
                  <td colSpan="7">Amount Chargeable (in words)</td>
                  
                  <td className="text-end"><i>E & O.E</i></td>
                </tr>
                <tr className="noBorderRow" style={{height:150}}>
                  <td colSpan="3"><b>INR One Lakh Seventy Seven Thousand only</b></td>
                  <td colSpan="5" style={{verticalAlign:"bottom"}}>
                    <tr>
                      <td>Company's bank details</td>
                    </tr>
                    <tr>
                      <td>Bank Name &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<b>ICICI Bank</b> </td>
                    </tr>
                    <tr>
                      <td>A/c No. &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<b>29012149039243</b> </td>
                    </tr>
                    <tr>
                      <td>Branch & IFS Code &nbsp;:&nbsp;<b>SNIN0034789</b> </td>
                    </tr>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="noBorderRow"></td>
                  <td colSpan="5" className="text-end" style={{height:100,verticalAlign:"bottom"}}>
                    
                    <span>Authorised Signature</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-center">This is a Computer Generated Document</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default InvoiceGenerator;
