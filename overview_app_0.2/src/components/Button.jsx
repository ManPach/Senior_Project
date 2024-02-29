import React from "react";

export const Button = ({ classes, text, icon }) => {
  return (
    <Button className={`btn ${classes}`}>
      {icon}
      {text}
    </Button>
  );
};
