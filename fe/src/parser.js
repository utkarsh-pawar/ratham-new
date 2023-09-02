class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const { name, age } = this.state;
    console.log(this.state);
    if (!name) {
      this.actionProvider.setName(message);
    }
    if (name && !age) {
      this.actionProvider.setAge(message);
    }
  }
}

export default MessageParser;
