import "./App.css";
import data from "./data.json";
import ReaktTable from "./ReaktTable";
import React from "react";

function App() {
  const columns = ["HomeTeam", "AwayTeam"];

  return (
    <div className="App">
      <ReaktTable rows={data} columns={columns}></ReaktTable>
    </div>
  );
}

export default App;
