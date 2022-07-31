import React from "react";
import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 0",
      }}
    >
      <Triangle color="#5468ff" height="80" width="80" />
    </div>
  );
};

export default Loading;
