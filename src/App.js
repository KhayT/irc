import React, { Fragment, useState } from "react";
import ThankyouCard from "./component/ThankyouCard";

function App() {
  const [showThanks, setShowTanks] = useState(false);
  const [rate, setRate] = useState();
  const showThanksHandler = () => {
    setShowTanks(true);
  };

  const Button = (props) => {
    const rateHandler = () => {
      setRate(props.digit);
    };
    return (
      <button className="btn" onClick={rateHandler}>
        {props.digit}
      </button>
    );
  };

  const MainContent = (props) => {
    return (
      <main className="content main-content">
        <div className="rating--star"></div>
        <h1 className="rating--heading">How did we do?</h1>

        <p className="rating--text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div className="rating--btn">
          <Button digit={1} />
          <Button digit={2} />
          <Button digit={3} />
          <Button digit={4} />
          <Button digit={5} />
        </div>

        <button className="btn-submit" onClick={props.onShowThanks}>
          SUBMIT
        </button>
      </main>
    );
  };

  return (
    <Fragment>
      {!showThanks && <MainContent onShowThanks={showThanksHandler} />}
      {showThanks && <ThankyouCard rate={rate} />}
    </Fragment>
  );
}

export default App;
