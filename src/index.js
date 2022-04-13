import React from "react";
import ReactDOM from "react-dom";
import style from "./style.css";

function Greeting() {
  return (
    <>
      {/* this is a jsx fragment */}
      <div className="css">
        <h4>hello react</h4>
        <ul>
          <li>something</li>
        </ul>
      </div>
      <div>
        <h3> another div</h3>
        <ul>
          <li>another list</li>
        </ul>
      </div>
    </>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
