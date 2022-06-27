import React from "react";

function ThankyouCard(props) {
  let noRate = true;
  if (props.rate !== undefined) {
    noRate = false;
  }

  return (
    <section className="content thank--you_card">
      <div className="score--board_img"></div>
      {noRate && <h4 className="score--board">You didn't rate</h4>}

      {!noRate && (
        <h4 className="score--board">You selected {props.rate} out of 5</h4>
      )}

      <h1 className="score--board_text">Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </section>
  );
}

export default ThankyouCard;
