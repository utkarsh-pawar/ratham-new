import { createChatBotMessage } from "react-chatbot-kit";
import MessageParser from "./parser";
import LearningOptions from "./components/options";
import SelectAge from "./components/SelectAge";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      widget: "learningOptions",
    }),
  ],

  state: {
    name: "",
    age: 0,
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "selectAge",
      widgetFunc: (props) => <SelectAge {...props} />,
    },
  ],
};

export default config;
