import React, { Component } from 'react';

const Button = (props) => {
  const greet = ()=>{
    alert(props.label)
  }
  return <button onClick={greet}>{props.label}</button>;
}

export default Button;
