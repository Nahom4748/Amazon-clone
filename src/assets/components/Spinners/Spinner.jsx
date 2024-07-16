import React from "react";
import spinner from "react-spinners";

function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <FadeLoader />
    </div>
  );
}

export default Spinner;
