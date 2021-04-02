import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [synthersizers, setSynthersizers] = useState([]);

  // const synthersizerName = synthersizers.map((synthersizer) => {
  //   console.log("1 SYNTH?", synthersizer);
  //   return <li className="style-card">{synthersizer.name}</li>;
  // });

  useEffect(() => {
    async function fetchSynthersizer() {
      // console.log("fetching");
      try {
        const { data } = await axios.get(
          `https://synthesizer-api.herokuapp.com/api/synths?key=T60ZPHZ-D8V4Z93-MNW77EK-A4DN790&yearProduced=1980`
        );
        // console.log("RESPONSE", data.synths);
        setSynthersizers(data.synths);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSynthersizer();
  }, []);
  // console.log("synth", synthersizers[0]?.name);

  return (
    <>
      <div className="main-card">
        {synthersizers.map((synthersizer) => {
          console.log("1 SYNTH?", synthersizer);
          // console.log("manu", synthersizers);
          return (
            <ul key={synthersizer.id} className="style-card">
              <li>
                <h2>{synthersizer.name.toUpperCase()}</h2>
              </li>
              <img className="img" src={synthersizer.img} alt="synthersizer" />
              <li>Manufacturer: {synthersizer.Manufacturer?.manufacturer}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
export default App;
