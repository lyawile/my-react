import React, { Component, useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  const updateCounter = () => {
    setCounter(count / 10);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={updateCounter}>Update counter</button>
    </>
  );
};

export default Counter;
