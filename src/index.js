import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Title from "./routes/Title";
import Prologue from "./routes/Prologue";
import Bibliography from "./routes/Bibliography";
import Poetry from "./routes/Poetry";
import Photos from "./routes/Photos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="title" element={<Title />} />
          <Route path="prologo" element={<Prologue />} />
          <Route path="bibliografia" element={<Bibliography />} />
          <Route path="poesia" element={<Poetry />} />
          <Route path="fotografias" element={<Photos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
