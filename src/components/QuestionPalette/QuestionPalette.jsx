import React from "react";
import "./questionpalette.css";

const QuestionPalette = () => {
  return (
      <div className="question-palette">
        <h3>Question Palette</h3>
        <div className="palette-grid">
          {Array.from({ length: 30 }, (_, i) => (
            <button
              className={`palette-button ${i === 0 ? "active" : ""}`}
              key={i + 1}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="legend">
          <div>
            <span className="answered"></span> Answered
          </div>
          <div>
            <span className="not-answered"></span> Not Answered
          </div>
          <div>
            <span className="marked"></span> Marked
          </div>
          <div>
            <span className="not-visited"></span> Not Visited
          </div>
          <div className="btn btn-pro-inst">
            <button>Profile</button>
            <button>Instructions</button>
          </div>
        </div>
      </div>
  );
};

export default QuestionPalette;
