import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [synthesizers, setSynthesizers] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);

  const showPreviousPage = () => {
    setPage(page - 1);
  };

  const showNextPage = () => {
    setPage(page + 1);
  };
  console.log("page", page);

  useEffect(() => {
    async function fetchSynthesizer() {
      // console.log("fetching");
      try {
        const { data } = await axios.get(
          `https://synthesizer-api.herokuapp.com/api/synths?key=T60ZPHZ-D8V4Z93-MNW77EK-A4DN790&limit=20&offset=${
            page * 20
          }`
        );
        // console.log("RESPONSE", data.synths);
        setSynthesizers(data.synths);
        setCount(data.count);
        // setNextPage();
        // setPreviousPage();
      } catch (error) {
        console.error(error);
      }
    }
    fetchSynthesizer();
  }, [page]);

  // console.log("synth", synthersizers[0]?.name);

  return (
    <>
      <div className="head-text">
        <h1>Let's grab some synthesizer data!</h1>
        <h4>Data from Bernard's Synthesizer API</h4>
      </div>

      <div className="buttons">
        <button
          className="btn"
          type="button"
          onClick={showPreviousPage}
          disabled={page === 0}
        >
          Previous
        </button>
        <button
          className="btn"
          type="button"
          onClick={showNextPage}
          disabled={count / 20 < page + 1}
        >
          Next
        </button>
      </div>
      <div className="main-card">
        {synthesizers.map((synthesizer) => {
          // console.log("1 SYNTH?", synthesizer);
          return (
            <ul key={synthesizer.id} className="style-card">
              <li>
                <h2>{synthesizer.name.toUpperCase()}</h2>
              </li>
              <img className="img" src={synthesizer.img} alt="synthesizer" />
              <li>Manufacturer: {synthesizer.Manufacturer?.manufacturer}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
export default App;
