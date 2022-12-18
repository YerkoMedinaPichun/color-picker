import React from "react";
import "../styles/Title.scss";

const Title = ({ children }) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default Title;
