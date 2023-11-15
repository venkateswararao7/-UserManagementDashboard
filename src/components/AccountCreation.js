import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../styles/AccoutCreation.css";


const AccountCreation = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCreateAccount = async () => {
    try {
      if (username && password) {
        console.log("Redirecting to /Information");
        navigate('/Information');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="signUp-container">
      <div className="signUp-form">
        <div className="log">
          <LoginIcon />
        </div>

        <div className="holder">
          <PersonOutlineOutlinedIcon className="user-icon" />
          <input
            type="text"
            placeholder="USERNAME"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="holder">
          <HttpsOutlinedIcon className="user-icon" />
          <input
            type="password"
            placeholder="PASSWORD"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="input-field" onClick={handleCreateAccount}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default AccountCreation;
