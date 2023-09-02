import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Enter into Student Info System</h2>
      <button onClick={() => navigate("/chatbot")}>Enroll now!</button>
    </div>
  );
};

export default Landing;
