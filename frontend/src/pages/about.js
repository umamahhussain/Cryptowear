import React,{useEffect} from 'react';
import M from 'materialize-css'

const About = () => {

    useEffect(() => {
        // Initialize dropdown after component is mounted
        var elems = document.querySelectorAll('.collapsible');
        
        M.Collapsible.init(elems);
      }, []); 
    
    return (
        <div className="about">
            <div className="login-container" style={{ position: "relative", border: "5px solid transparent", borderRadius: "15px", overflow: "hidden", boxShadow: "0 0 20px rgba(255, 255, 255, 1)" }}>
                <img src="https://wallpapercave.com/dwp2x/wp12471662.jpg"
                    style={{ height: "100vh", width: "100%", objectFit: "cover", zIndex: "1" }} />

                <div className="overlay">
                    <div className="black" style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "2" }}>
                        <div className="card-content white-text" style={{width:600, height:'auto'}}>
                            <h3 className="card-title" style={{ textShadow: "2px 2px 5px rgba(255, 255, 255, 1)", fontFamily: "Audiowide" }}>
                                <u>
                                    About
                                </u>
                            </h3>

    <ul className="collapsible" style={{color:'black'}}>
    <li>
      <div className="collapsible-header"><i className="material-icons">assessment</i>How We Work</div>
      <div className="collapsible-body" style={{color:'white'}}>
      <p>Once you place the order, we will make your sample and show it to you</p>
    <p>If you don't approve the sample, we will remake your sample for you!</p>
    <p>Once you are satisfied and approve the sample, only then will we start your bulk production</p>
    <p>Once the bulk production is complete, we will ship it to your doorstep via DHL/UPS!</p>
</div>
    </li>
    
    <li>
      <div className="collapsible-header"><i className="material-icons">attach_money</i>Prices</div>
      <div className="collapsible-body" style={{color:'white'}}>
    <p>Prices vary depending on:</p> 
    <p>○ Custom designing requirements</p>
    <p>○ Total quantity of your bulk order</p>
    <p>The more you buy the cheaper it will be !</p>
</div>
    </li>

    <li>
      <div className="collapsible-header"><i className="material-icons">access_time</i>Turnaround Time</div>
      <div className="collapsible-body" style={{color:'white'}}>
    <p>Our turnaround time is 2 to 3 weeks:</p> 
    <p>○ 1 week for sampling</p>
    <p>○ 1 week for bulk production</p>
    <p>○ 1 week for shipping via UPS/DHL</p>
    <p>If you have a deadline to meet, you can place a rush order as well !</p>
</div>
    </li>

    <li>
      <div className="collapsible-header"><i className="material-icons">add_location</i>Location</div>
      <div className="collapsible-body" style={{color:'white'}}>
    <p>Our production units are based in:</p>
<p>Italy | Pakistan | China | South Korea | Vietnam | Bangladesh</p> 
    <p>We operate internationally providing custom apparel services all around the globe</p>
    
</div>
    </li>

  </ul>               




   



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
