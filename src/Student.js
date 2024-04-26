import React from "react";

const Student = (props) => {
  return (
    <div style={{ background: "light-gray" }}>
      <h1>name : {props.name}</h1>
      <h1>email : {props.email}</h1>
    </div>
  );
};

export default Student;
