import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import M from 'materialize-css'

const Login = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const PostData = () => {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          console.log("in the error")
          M.toast({ html: data.error, classes: "rounded #80cbc4 teal lighten-3" });
        }
        else if (data.user && data.user.username) {
          // Ensure the user object and name property exist 
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          M.toast({ html: "Signed in", classes: "rounded #80cbc4 teal lighten-3" });
          navigate('/additem');
        } else {
          console.error("Invalid user data received from server:", data);
          M.toast({ html: "Invalid user data", classes: "rounded #80cbc4 teal lighten-3" });
        }
      })
      .catch(err => {
        console.error("Error during login:", err);
        M.toast({ html: "Error during login", classes: "rounded #80cbc4 teal lighten-3" });
      });
  };


  return (
    <div className="login">
      <div className="login-container" style={{ position: "relative", border: "5px solid transparent", borderRadius: "15px", overflow: "hidden", boxShadow: "0 0 20px rgba(255, 255, 255, 1)" }}>
        <img src="https://images.unsplash.com/photo-1506606401543-2e73709cebb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ height: "100vh", width: "100%", objectFit: "cover" }} />
        <div className="overlay">


          <h1
            style={{ color: "aliceblue", textShadow: "0 0 10px rgba(255, 255, 255, 1)", position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1 }}>
            <u>Login</u>
          </h1>

          <form className="login-form"
            style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "50%", zIndex: 1 }}>

            <input type="text" placeholder="username" style={{color:'white'}}
              value={username} onChange={e => setUsername(e.target.value)}
            />

            <input type="password" placeholder="password" value={password} style={{color:'white'}}
              onChange={e => setPassword(e.target.value)} />


            <button className="btn" style={{ backgroundColor: "cadetblue", color: "white" }}
              type="submit" name="action" onClick={(e) => { e.preventDefault(); PostData(); }}>Login</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
