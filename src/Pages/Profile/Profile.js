import React, { useContext, useRef } from "react";
import UserContext from "../../UserContext";

function Profile() {
  const user = useContext(UserContext);
  const inputRef = useRef(null);
  console.log(user);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.focus());
  };
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Profile;
