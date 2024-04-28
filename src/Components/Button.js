import React from "react";

function Button(props) {
  console.log(props);
  return <button className={props.className}>{props.children}</button>;
}

export { Button };
