import React from "react";
import './index.css';
import qrImage from "../../assets/image-qr-code.png";

const Card = () => {
 return (
    <div className="card">
        <section className="qr-section">
            <img src={qrImage} alt="" />
        </section>
        <section className="info-section">
            <h1>Improve your front-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </section>
    </div>
 ); 
}

export default Card;