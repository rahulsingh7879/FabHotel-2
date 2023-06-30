import React, { useState } from 'react'

const About = () => {
    const [buttonText, setButtonText] = useState("More");
    const [style, setStyle] = useState("none");

    const showContent =()=>{
        {buttonText === "More" ? setButtonText("Less") : setButtonText("More")}
        {buttonText === "More" ? setStyle("block") : setStyle("none") }

       
          
    }
  return (
    <div className='mx-5 my-3'>
    <h2>About FabHotel Prime The King's Court, Calangute, Goa</h2>
    <div className="about  ">
    
    <p>FabHotel Prime The King's Court is among the most preferred budget hotels in Goa for both business travelers and tourists seeking a comfortable stay.</p>
    <ul>
    <li>It features contemporary rooms with modern amenities like a flat-screen TV, air conditioner and attached bathroom with hot and cold water supply.</li>
    <li>Further, room service, 24-hour CCTV surveillance for maximum security, round-the-clock power backup and complimentary Wi-Fi access are provided for added convenience.</li>
    <li>Our trained and hospitable staff at the front desk is always at your service, leaving no stone unturned in making your stay with us pleasant and enjoyable.</li>
    </ul>
    <div className="other" style={{display: `${style}`}}>
    <strong>Why This FabHotel</strong>
    <p>The hotel enjoys easy connectivity to the airport, railway station, popular tourist attractions, major business hubs, and prominent markets.We also offer a loyalty program, the A-List, which guarantees you reward points every time you book directly with us. For any query, concern or assistance while making a booking, you can contact our central reservations department at +91 70 4242 4242. </p>
    </div>
    <button onClick={()=>showContent()} type="button " class="btn right btn-primary">View {buttonText} Details</button>
    </div>
    </div>
  )
}

export default About