import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("patient");

  const addUser = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email, password, firstName, lastName, role });
    localStorage.setItem("users", JSON.stringify(users));
    alert("User added successfully!");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser();
        }}
      >
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <select onChange={(e) => setRole(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
