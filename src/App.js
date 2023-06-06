import React, { useState } from "react";
import Header from "./componentss/Header/Header";
import Main from "./componentss/Main/Main";
import Footer from "./componentss/Footer/Footer";
import { Switch, Routes, Route } from "react-router-dom";
import "./App.css";
import { dataMock } from "./dataMock";
import FullView from "./componentss/FullView/FullView";

function App() {
  const localStorageData = localStorage.getItem("data");
  const [data, setData] = useState(
    localStorageData ? JSON.parse(localStorageData) : dataMock
  );
  const updateData = (newData) => {
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  };

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Main data={data} updateData={updateData} />}
          exact
        />

        <Route
          path="/tasks/:id"
          element={<FullView data={data} />}
        />
      </Routes>

      <Footer data={data}/>
    </div>
  );
}

export default App;