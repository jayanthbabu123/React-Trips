import React from "react";

function UserProfile({title, description,className,count, increment}) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className={className} onClick={increment}>
           {count}
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

UserProfile.defaultProps = {
  title: "Sample Title",
  description: "Sample description",
  className: "btn btn-primary",
};
