import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Chatbot } from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./parser";
import ActionProvider from "./action";
import "./App.css";
import "react-chatbot-kit/build/main.css";
import Landing from "./components/Landing";
import ExitPage from "./components/ExitPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<ExitPage />} path="/exit" />
        <Route
          element={
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          }
          path="/chatbot"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
