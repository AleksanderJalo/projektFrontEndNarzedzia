import { useEffect, useState } from "react";
import api from "../api/api";
import "../App.scss";
import React from "react";

function App() {
  const [kierowcy, setKierowcy] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dane = await api();
      setKierowcy(dane);
      console.log(dane);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <h1>Kierowcy F1</h1>
      <ul className="drivers-list">
        {kierowcy.map((kierowca, index) => (
          <li key={index} className="driver-card">
            <span className="driver-number">NR: {kierowca.driver_number}</span>
            <span className="driver-name">{kierowca.full_name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
