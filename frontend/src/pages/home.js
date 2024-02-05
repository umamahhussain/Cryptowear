import React, { useState, useRef,useEffect } from 'react';
import lol from './women.jpg';
import { Outlet, Link, useNavigate } from "react-router-dom";
// import M from 'materialize-css';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollToRef = useRef(null);

  const [data, setData] = useState([]);
 
  const iconContainerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  };

  const featureStyle = {
    color: 'black',
    textAlign: 'center',
    margin: '15px',
    width: '30%', // Adjust the width as needed
  };

  useEffect(() => {
    fetch('/allposts')
      .then((res) => res.json())
      .then((result) => {
        console.log(result); // Log the result to see what the server is returning
        setData(result.posts);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount


  const deletePost = (postId) => {
    // Optimistically update the UI
    const newData = data.filter(item => item._id !== postId);
    setData(newData);
  
    fetch('/deletepost/' + postId, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        // Update the state only if the operation was successful
      })
      .catch(err => {
        console.log(err);
        // Revert the state if there was an error
        setData(data);
      });
  };
  

 const renderdeletebutton = (postId) => {
  if (localStorage.getItem('jwt')) {
    return (
      <i
        className='material-icons'
        style={{ color: 'cadetblue', float: 'right',cursor: 'pointer' }}
        onClick={() => deletePost(postId)}
      >
        delete_forever
      </i>
    );
  }
  return null; // Render nothing if localStorage is not set
};


  const handleScroll = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <div className="login-container" style={{ position: "relative", border: "5px solid transparent", borderRadius: "15px", overflow: "hidden", boxShadow: "0 0 20px rgba(255, 255, 255, 1)" }}>

        <div className="image-grid">
          <img src="https://wallpapercave.com/wp/wp12042692.jpg" alt="Image 1" />
          <div className='overlay'>
            <div className="image-overlay">
              <h1
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleScroll} // Scroll when clicked
                style={{
                  fontSize: "60px",
                  margin: "0",
                  color: isHovered ? 'white' : 'rgb(0 78 172)', // Neon blue when hovered
                  textShadow: "0 0 20px rgba(0, 0, 128, 1)",
                  cursor: 'pointer' // Show pointer cursor on hover
                }}
              >
                Stitch and Supply
              </h1>
              <h1
                className='bluehehe'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleScroll} // Scroll when clicked
                style={{
                  fontSize: "50px",
                  textAlign: 'right',
                  margin: "0",
                  color: isHovered ? 'rgba(0, 191, 255, 1)' : 'white', // Neon blue when hovered
                  textShadow: "0 0 20px rgba(0, 0, 128, 1)",
                  cursor: 'pointer' // Show pointer cursor on hover
                }}
              >
               Atalier Engineer
              </h1>
            </div>
          </div>
          <img src={lol} alt="Image 1" />
        </div>
      </div>
      <div className="text-container" ref={scrollToRef}>
        <h3 style={{ textAlign: 'center', marginTop: '100px', color: 'aliceblue', textShadow: '0 0 5px rgba(255, 255, 255, 1)' }}>
          <u> Stitch and Supply</u>
        </h3>
        <p style={{ textAlign: 'center', color: 'aliceblue', textShadow: '0 0 8px rgba(255, 255, 255, 1)' }}>
         operates internationally providing custom apparel services all around the globe
        </p>
      </div>

      {data.map((item) => (
        <div className='card' key={item._id}>
        {renderdeletebutton(item._id)}
          <div className='home-card'>
                    
            <div className='card-image'>
              <img src={item.imageUrl} alt='Post' />
            </div>
            <div className='card-content'>
              <h6>{item.caption}</h6>             
            </div>
          </div>
        </div>
      ))}



<div style={iconContainerStyle}>
      <div style={featureStyle}>
        <i className="material-icons">local_shipping</i>
        <p>Free Delivery</p>
      </div>

      <div style={featureStyle}>
        <i className="material-icons">phone</i>
        <p>24/7 Support</p>
      </div>

      <div style={featureStyle}>
        <i className="material-icons">credit_card</i>
        <p>Secure Payment</p>
      </div>

      <div style={{ textAlign: 'center', width: '100%' ,backgroundColor:'black'}}>
        <h4 style={{
          marginTop: '40px',
          backgroundColor:'black',
          color: 'white',
          textShadow: '0 0 10px rgba(255, 255, 255, 1)',
        }}>
          Contact us to get the latest on Sales, New Releases and More...
        </h4>
      </div>
    </div>



    </div>
  );
};

export default Home;











