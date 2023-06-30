import React from 'react'
import { useState } from "react"

const CourtPolicies = () => {
  const [buttonText, setButtonText] = useState("More");
    const [style, setStyle] = useState("none");

    const showContent =()=>{
        {buttonText === "More" ? setButtonText("Less") : setButtonText("More")}
        {buttonText === "More" ? setStyle("block") : setStyle("none") }    
    }
  return (
    <div className='mx-5 my-3'>
    <table className="table  hotel-policies table-borderless">
    <tbody>
      <tr>
       
        <td >
        <p>chekc In</p>
        <strong>12:00PM</strong>
        </td>
        <td >
        <p>chekc out</p>
        <strong>11:00AM</strong>
        </td>
        <td >
        <p>Children and Extra Beds</p>
        <strong>Child upto 8 years is Allowed</strong>
        </td>
        <td >
        <p>Local Id</p>
        <strong>not Allowed</strong>
        </td>
   
      </tr>
      <tr>
      <td >
        <p>Couple friendly</p>
        <strong>Allowed</strong>
        </td>
        <td >
        <p>Foreing Guest</p>
        <strong>Allowed</strong>
        </td>
      </tr>
     
    
    </tbody>
  </table> 

  <table style={{display: `${style}`, backgroundColor: "rbg(209, 209, 209)"}} className="table hotel-policies table-borderless">
    <tbody>
      <tr>
       
        <td >
        <p>Local ID</p>
        <ul><li>This hotel doesn't allow check-in using local IDs</li></ul>
        </td>
        <td >
        <p>Cancellation Policies</p>
        <ul>
        <li>Free cancellation: If cancelled  24 hours before 12pm on check-in date</li>
        <li>One night charge: If cancelled 24 hours before 12pm on check-in date</li>
        <li>No show: Entire booking cost will be charged as cancellation fee</li>

        </ul>
        </td>
   
      </tr>
      <tr>
      <td >
        <p>Foreing Guest</p>
        <ul><li>Foreign guests are welcome. They are required to produce a valid passport and visa.</li></ul>
        </td>
      </tr>
      <tr>
      <td >
        <p>Couple Friendly</p>
        <ul><li>This hotel welcomes unmarried couples</li></ul>
        </td>
        <td >
        <p>Children Policies</p>
        <ul><li>Maximum of one child up to the age of 8 years is allowed free of charge</li>
        <li>No complimentary breakfast and extra bed/mattress will be provided in such cases</li></ul>
        </td>
      </tr>
      
     
    
    </tbody>
  </table> 
  <button onClick={()=>showContent()} type="button " class="btn right btn-primary">View {buttonText} Details</button>
    
    </div>
  )
}

export default CourtPolicies