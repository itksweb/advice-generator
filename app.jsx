function App() {
  const [advice, setAdvice] = React.useState({
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
        <img
          src="./pattern-divider-desktop.svg"
          alt="pattern-divider-desktop"
          id="dDivider"
        />
        <img
          src="./pattern-divider-mobile.svg"
          alt="pattern-divider-mobile"
          id="mDivider"
        />
      </div>
      <div className="ty flex">
        <div className="action flex" onClick={fetchNewAdvice}>
          <img src="./icon-dice.svg" alt="button" />
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
