import React from "react";

// import "./LearningOptions.css";

const LearningOptions = (props) => {
  console.log(props);
  const options = [
    {
      text: "Got it!",
      handler: () => {
        props.actionProvider.clientMessage("Got it!");
      },
      id: 1,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
