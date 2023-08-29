import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Enter into Student Info System</div>
      <Button colorScheme="facebook" onClick={() => navigate("/details")}>
        Enroll Now{" "}
      </Button>
    </>
  );
};

export default Welcome;
