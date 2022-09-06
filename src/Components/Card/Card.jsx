import React from "react";

function Card(props) {
  let style = {
    backgroundColor: "white",
    borderRadius: "10px",
    borderShadow: "2px 2px 2px grey",
    width: "80%",
    margin: "1px auto",
  };

  return <div style={style}> {props.children}</div>;
}

export default Card;
