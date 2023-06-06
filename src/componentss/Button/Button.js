import React from "react";
import "./Button.css";

const Button = ({ ...props }) => (
  <button className="button" {...props}>
    + Add card
  </button>
);

export default Button;