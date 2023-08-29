// MessageParser starter code
import { createChatBotMessage } from "react-chatbot-kit";
// MessageParser
export class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const { actionProvider, state } = this;

    if (!state.name) {
      actionProvider.askForName();
    } else if (!state.age) {
      actionProvider.askForAge();
    } else {
      // If both name and age are set, show confirmation
      actionProvider.showConfirmation();
    }
  }
}

// ActionProvider
export class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  showWelcomeMessage() {
    const message = this.createChatBotMessage(
      "Hello, Welcome to the student info system!"
    );
    this.addMessageToState(message);
    if (!this.state.name) {
      this.askForName();
    } else if (!this.state.age) {
      this.askForAge();
    } else {
      this.showConfirmation();
    }
  }
  askForName() {
    const message = this.createChatBotMessage("Enter your Name");
    this.addMessageToState(message);
  }

  setName(name) {
    this.setState((prevState) => ({
      ...prevState,
      name,
    }));
    this.askForAge();
  }

  askForAge() {
    const message = this.createChatBotMessage("Enter your Age");
    this.addMessageToState(message);
  }

  setName(name) {
    this.setState(
      (prevState) => ({
        ...prevState,
        name,
      }),
      () => {
        if (!this.state.age) {
          this.askForAge();
        } else {
          this.showConfirmation();
        }
      }
    );
  }

  showConfirmation() {
    const { name, age } = this.state;
    const message = this.createChatBotMessage(
      `Thank you. In 5 seconds, the bot will exit.\n\nYour name ${name} aged ${age} has been added to the student system. You may now exit.`
    );
    this.addMessageToState(message);

    setTimeout(() => {
      // Navigate to another page or perform any other action
    }, 5000);
  }

  handleDefault() {
    const message = this.createChatBotMessage(
      "Please click 'Got it' to continue."
    );
    this.addMessageToState(message);
  }

  addMessageToState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

// Chatbot config
export const config = {
  initialMessages: [
    createChatBotMessage("Enter into Student Info System"),
    createChatBotMessage("Got it!", {
      widget: "gotItButton",
    }),
  ],
  state: {
    name: "",
    age: "",
  },
  customComponents: {
    gotItButton: (props) => (
      <button onClick={props.actionProvider.showWelcomeMessage}>
        {props.message}
      </button>
    ),
  },
  botName: "Student Info Bot",
  customStyles: {},
  widgets: [],
  language: "en",
  messageParser: MessageParser,
  actionProvider: (createChatBotMessage, setStateFunc) =>
    new ActionProvider(createChatBotMessage, setStateFunc),
};
