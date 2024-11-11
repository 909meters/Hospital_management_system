import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user.role === "admin") navigate("/AdminDashboard");
  else if (user.role === "doctor") navigate("/DoctorDashboard");
  else navigate("/DashboardPage/PatientDashboard");

  //   return <div>Redirecting...</div>;
}

export default Dashboard;
