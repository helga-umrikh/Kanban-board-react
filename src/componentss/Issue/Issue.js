import React from "react";
import { Link } from "react-router-dom";

import "./Issue.css";

const Issue = ({ name, id }) => (
  <Link to={`/tasks/${id}`} className="issue">
    {name}
  </Link>
);

export default Issue;