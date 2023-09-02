import { addAge, addName } from "./store/userSlice";

class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
    this.rest = rest;
  }
  // handleMessageContinuation = (message) => ({
  //   ...prev,
  //   messages: [...prev.messages, message],
  // });

  clientMessage = (clientMessage) => {
    const message = this.createClientMessage(clientMessage);
    this.addMessageToState(message);
    const botMsg = this.createChatBotMessage("what is your name");
    this.addMessageToState(botMsg);
  };
  addMessageToState = (message) => {
    this.setState((prevstate) => ({
      ...prevstate,
      messages: [...prevstate.messages, message],
    }));
  };
  addToGlobalState = () => {
    console.log(this.stateRef);
  };
  setName = (message) => {
    this.setState((prev) => ({ ...prev, name: message }));
    const botMsg = this.createChatBotMessage("what is your age", {
      widget: "selectAge",
    });

    this.addMessageToState(botMsg);
  };
  setAge = (message, dispatch) => {
    this.setState((prev) => ({ ...prev, age: message }));
    const clientMessage = this.createClientMessage(message);
    this.addMessageToState(clientMessage);
    const botMsg = this.createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit"
    );
    this.addMessageToState(botMsg);
    const { name } = this.stateRef;
    console.log(this.stateRef, message);
    // this.addToGlobalState();
    dispatch(addName(name));
    dispatch(addAge(message));
  };
}

export default ActionProvider;
