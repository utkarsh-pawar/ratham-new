import React, { useState, useEffect } from "react";
import Message from "../components/Message";
import { Button, Input, Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addAge, addName } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Chatbot = ({ moveToPage3 }) => {
  const dispatch = useDispatch();
  const [breakIndex, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [chat, setChat] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const navigate = useNavigate();
  const [displayedMessage, setDisplayedMessage] = useState("...");
  const messages = [
    { from: "bot", message: "Hello, Welcome to the student info system!" },
    { from: "user", message: "Got it!", type: "button" },
    { from: "bot", message: "Enter your Name" },
    { from: "user", message: name },
    { from: "bot", message: "Enter your age" },
    { from: "user", message: age },
    { from: "bot", message: "Thank you. In 5 seconds, bot will exit" },
  ];
  const options = [];
  for (let i = 19; i <= 40; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div>
      <div>
        {messages.map((msg, index) => {
          if (index == 3) {
            return;
          }
          if (index > breakIndex) {
            return;
          }

          return (
            <p key={index}>
              {messages[index].from}: <Message msg={msg.message} />
            </p>
          );
        })}
        {}
        {/* <p>Bot: {displayedMessage}</p> */}
        {breakIndex == 0 && (
          <div>
            <Button onClick={() => setIndex(3)}>got it </Button>
          </div>
        )}
        {breakIndex === 3 && (
          <Input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(addName(e.target.value));
                setName(e.target.value);
                setIndex(4);
              }
            }}
          />
        )}

        {breakIndex == 4 && (
          <div>
            <Select
              onChange={(e) => {
                setIndex(6);
                setAge(e.target.value);
                dispatch(addAge(e.target.value));
                setTimeout(() => {
                  navigate("/confirmed");
                }, 5000);
              }}
            >
              {options}
            </Select>
          </div>
        )}
      </div>
      {messages[chat.length].type === "button" && <button>Got it</button>}
    </div>
  );
};

export default Chatbot;
