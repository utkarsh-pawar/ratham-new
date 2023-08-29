import React from "react";
import { useSelector } from "react-redux";

const Confirmation = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      Your name {user.name} aged {user.age} has been added to student system.
      You may now exit.
    </div>
  );
};

export default Confirmation;
