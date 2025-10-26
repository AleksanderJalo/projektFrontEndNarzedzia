import { useEffect, useState } from "react";
import api from "../api/api";

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
      <ul>
        {kierowcy.map((kierowca, index) => (
            <li key={index}>{`NR:${kierowca.driver_number}     ${kierowca.full_name}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
