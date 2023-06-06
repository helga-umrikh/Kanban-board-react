import React from "react";
import "./Issues.css";
import Issue from "../Issue/Issue";

const Issues = ({ issues }) => (
  <div className="issues">
    {issues.map(({ id, name }) => (
      <Issue key={id} name={name} id={id} />
    ))}
  </div>
);

export default Issues;