import React from "react";
import "../style/rooms.css";
import img1 from "../assest/download.jpeg";
import img2 from "../assest/img1.jpeg";
import img3 from "../assest/video-2.jpeg";

const Rooms = () => {
  return (
    <div className="d-flex px-5 mx-5">
      <div className="media d-flex flex-column ">
      <p style={{fontSize: "small"}}>All HotelsHotels in GoaCalangute FabHotel Prime The King's Court</p>
        <p className="mx-4 fs-3">FabHotel Prime The King's Court</p>
        <div className="crausel">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="bed" />
              </div>
              <div className="carousel-item">
                <img src={img2}  className="d-block w-100" alt="bed" />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="bed" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="info my-5">
         <div className="info-Header d-flex">
         <div className="sec1 d-flex">
          <div className="p-2 pb-2" style={{width:  "3rem" ,marginTop: "7px" , height: "2rem" ,backgroundColor: "#05014a"}}>
          <h5 className="" style={{color: "white", marginBottom: "1rem"}}>4.7</h5>
          </div>
           <section className="">
           <p className="mb-0" >Fabulous</p>
           <p className="" >1669 review</p>
           </section>
         </div>
         <div className="sec2  ">
         <p className="info-p mb-0" >97% guests rated 4+</p>
         <p className="info-p">98% guests recommend</p>
         </div>
         </div>

      </div>
    </div>
  );
};

export default Rooms;
