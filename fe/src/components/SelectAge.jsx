import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import "./LearningOptions.css";

const SelectAge = (props) => {
  const options = [];
  for (let i = 19; i <= 40; i++) {
    options.push(i);
  }
  console.log(props);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="learning-options-container">
      <select
        onChange={(e) => {
          props.actionProvider.setAge(e.target.value, dispatch);
          console.log(props.state.age);
          setTimeout(() => {
            navigate("/exit ");
          }, 5000);
        }}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectAge;
