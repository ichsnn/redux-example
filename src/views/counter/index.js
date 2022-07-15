import React from "react";
import { useSelector } from "react-redux";
import DecreaseBtn from "./components/DecreaseBtn";
import IncreaseBtn from "./components/IncreaseBtn";

import "./CounterView.css";

const CounterView = () => {
  const count = useSelector(state => state.counter.value)
  return (
    <div className="counter-container">
      <div className="counter-value">{count}</div>
      <div className="counter-btn-group">
        <DecreaseBtn />
        <IncreaseBtn />
      </div>
    </div>
  );
};

export default CounterView;
