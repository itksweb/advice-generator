import { useState} from "react";
import divider from "./pattern-divider-desktop.svg";
import divide from "./pattern-divider-mobile.svg";
import button from "./icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState({
    id: 123,
    advice: `For God so loved the world that He gave His only begotten Son. Anyone who believes in Him will not perish, but have eternal life.`,
  });
  const fetchNewAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((respose) => {
        return respose.json();
      })
      .then((data) => {
        const poi = { ...data.slip };
        setAdvice(poi);
      })
      .catch((err) => console.log(err));
    console.log("fetched");
  };

  return (
    <>
      <div className="card">
        <div className="title">ADVICE #{advice.id}</div>
        <div className="advice"> "{advice.advice}" </div>
      </div>
      <div className="divider flex">
        <img src={divider} alt="pattern-divider-desktop" id="dDivider" />
        <img src={divide} alt="pattern-divider-mobile" id="mDivider" />
      </div>
      <div className="ty flex">
        <div className="action flex" onClick={fetchNewAdvice}>
          <img src={button} alt="button" />
        </div>
      </div>
    </>
  );
}

export default App;
