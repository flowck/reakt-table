import "./App.css";
import "./ReaktTable/style.scss";
import data from "./data.json";
import ReaktTable from "./ReaktTable";
import React from "react";

function App() {
  const columns = ["HomeTeam", "AwayTeam", "Div", "Date", "Options"];

  return (
    <div className="App">
      <ReaktTable rows={data} columns={columns} isSortable />
    </div>
  );
}

export default App;
