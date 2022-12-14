import React from "react";
import "./styles.css";

function Button({text, onClick}) {
  return (
    <>
      <button onClick={onClick} className="c-button c-button--gooey">
        {" "}
        {text}
        <div className="c-button__blobs">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
      <svg
        style={{display: 'block', height: '0px', width: '0px'}}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              result="blur"
              stdDeviation="10"
              in="SourceGraphic"
            ></feGaussianBlur>
            <feColorMatrix
              result="goo"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              mode="matrix"
              in="blur"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic"></feBlend>
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default Button;
