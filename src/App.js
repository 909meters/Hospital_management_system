import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage"; // Импорт компонента
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Dashboard from "./components/DashboardPage/Dashboard";
import AdminDashboard from "./components/DashboardPage/AdminDashboard";
import DoctorDashboard from "./components/DashboardPage/DoctorDashboard";
import PatientDashboard from "./components/DashboardPage/PatientDashboard";

function App() {
  return (
    <Router>
      <nav>
        {/* <Link to="/">Login</Link> */}
        {/* <Link to="/login">Login</Link>
        <Link to="/register">Sign up</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
        <Route path="/PatientDashboard" element={<PatientDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
