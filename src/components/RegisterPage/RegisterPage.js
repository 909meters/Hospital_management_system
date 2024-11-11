// RegisterPage.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email, password, firstName, lastName, role: "patient" });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created!");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Hospital Management</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {/* <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          /> */}
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
