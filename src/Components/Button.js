import React from "react";

function Button(props) {
  console.log(props);
  return <button className={props.className}>{props.name}</button>;
}

export { Button };
