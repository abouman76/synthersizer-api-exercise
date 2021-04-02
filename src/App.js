import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [synthesizers, setSynthesizers] = useState([]);

  // const synthersizerName = synthersizers.map((synthersizer) => {
  //   console.log("1 SYNTH?", synthersizer);
  //   return <li className="style-card">{synthersizer.name}</li>;
  // });

  useEffect(() => {
    async function fetchSynthesizer() {
      // console.log("fetching");
      try {
        const { data } = await axios.get(
          `https://synthesizer-api.herokuapp.com/api/synths?key=T60ZPHZ-D8V4Z93-MNW77EK-A4DN790&yearProduced=1980`
        );
        // console.log("RESPONSE", data.synths);
        setSynthesizers(data.synths);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSynthesizer();
  }, []);
  // console.log("synth", synthersizers[0]?.name);

  return (
    <>
      <div className="head-text">
        <h1>Let's grab some synthesizer data!</h1>
        <h4>Data from Bernard's Synthesizer API</h4>
      </div>

      <div className="buttons">
        <button className="btn" type="button" onClick={() => alert("Previous")}>
          Previous
        </button>
        <button className="btn" type="button" onClick={() => alert("Next")}>
          Next
        </button>
      </div>
      <div className="main-card">
        {synthesizers.map((synthesizer) => {
          console.log("1 SYNTH?", synthesizer);
          // console.log("manu", synthersizers);
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
