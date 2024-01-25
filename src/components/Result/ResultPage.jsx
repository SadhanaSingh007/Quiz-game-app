// ResultPage.jsx
import React, { useEffect, useState } from "react";
import "./ResultPage.css";
import "./PartyPopper.css";
import { NavLink, useParams } from "react-router-dom";
import party2 from "../../assets/party2.gif";
import { useAnswerContext } from "../context/AnswerContext";

export const ResultPage = () => {
  const obj = useAnswerContext();
  const { category } = useParams();
  const percentage = (
    (obj.correctAnswers / obj.questions.length) *
    100
  ).toFixed(2);

  const [showPoppers, setShowPoppers] = useState(false);
  useEffect(() => {
    // This function will be called when the component mounts
    setShowPoppers(true);
    setTimeout(() => setShowPoppers(false), 4000); //
  }, []);

  let resultMessage;
  if (obj.correctAnswers >= 6) {
    resultMessage = (
      <div>
        🎊<span className="congrats">Congratulations! </span>🎊 You did great!
      </div>
    );
  } else {
    resultMessage = (
      <div>
        👎<span className="loss">Better luck next time. </span>👎{" "}
      </div>
    );
  }

  return (
    <div className="result-container">
      {/* <button >Click me for party!</button> */}
      {showPoppers && (
        <div className="party-poppers-container">
          {/* <div className="party-pop">
            <img src={partypopper} alt="Party Popper 1" />
          </div> */}
          <div className="party-pop">
            <img src={party2} alt="Party Popper 2" />
          </div>
        </div>
      )}

      <h2 className="resulth2">Quiz Results</h2>
      <p className="result-message">{resultMessage}</p>

      <div className="result-items">
        <p>
          Category: <span>{category}</span>
        </p>
        <p>
          Total Questions: <span>{obj.questions.length}</span>
        </p>
        <p>
          Correct Answers: <span>{obj.correctAnswers}</span>
        </p>
        <p>
          Percentage: <span>{percentage}%</span>
        </p>
      </div>
      <div>
        <NavLink to="/">
          <button className="mainpage"> Play Again</button>
        </NavLink>
      </div>
    </div>
  );
};
