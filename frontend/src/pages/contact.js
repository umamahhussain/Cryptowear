import React from 'react';

const Contact = () => {
    return (
        <div className="Contact">
            <div className="login-container" style={{ position: "relative", border: "5px solid transparent", borderRadius: "15px", overflow: "hidden", boxShadow: "0 0 20px rgba(255, 255, 255, 1)" }}>
                <img src="https://wallpapercave.com/wp/wp9793545.jpg"
                    style={{ height: "100vh", width: "100%", objectFit: "cover", zIndex: "1" }} />

                <div className="overlay">
                    <div className="black" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "2" }}>
                        <div className="card-content white-text">
                            <h3 className="card-title" style={{ textShadow: "2px 2px 5px rgba(255, 255, 255, 1)", fontFamily: "Audiowide" }}>
                                <u>
                                    Contact Us
                                </u>
                            </h3>

                            <h6 style={{ fontFamily: "Audiowide" }}>
                            Please feel free to contact our team on WhatsApp to facilitate the booking of your desired products. We are at your service and look forward to assisting you with any inquiries or requests you may have.
                            </h6>
                            <a href="https://wa.me/+923334349381" target="_blank" rel="noopener noreferrer">
  Contact our team on WhatsApp
</a>


                            <h5 style={{ textShadow: "2px 2px 5px rgba(255, 255, 255, 1)", fontFamily: "Audiowide", textAlign: 'center' }}>
                                –Where Chic Meets Sophistication.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
