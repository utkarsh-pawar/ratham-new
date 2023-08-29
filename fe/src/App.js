import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Details from "./pages/Details";
import { Center, Flex } from "@chakra-ui/react";
import Confirmation from "./pages/Confirmation";

const App = () => {
  return (
    <BrowserRouter>
      <Center>
        <Flex w={"md"} direction={"column"} pt={"20"}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/details" element={<Details />} />
            <Route path="/confirmed" element={<Confirmation />} />
          </Routes>{" "}
        </Flex>
      </Center>
    </BrowserRouter>
  );
};

export default App;
