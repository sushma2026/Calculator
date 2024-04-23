import React from "react";

function ResultView({ history, output }) {
  let colorStyle = {
    color: output === "Error" ? "#f11" : "#fff",
  };

  return (
    <div style={colorStyle} className="result">
      <div className="history">{history}</div>
      <div className="output">{output}</div>
    </div>
  );
}
export default ResultView;
