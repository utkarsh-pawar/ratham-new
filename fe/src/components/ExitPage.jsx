import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ExitPage = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.name == "" && user.age == 0) {
      navigate("/");
    }
  }, [user]);
  return (
    <h3>
      Your name {user.name} aged {user.age} has been added to student system.
      You may now exit.
    </h3>
  );
};

export default ExitPage;
