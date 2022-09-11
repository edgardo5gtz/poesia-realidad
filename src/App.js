import { Route, Routes } from "react-router-dom";
import Bibliography from "./routes/Bibliography";
import Photos from "./routes/Photos";
import Poetry from "./routes/Poetry";
import Prologue from "./routes/Prologue";
import Title from "./routes/Title";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="flex items-stretch h-full w-full">
      <Sidebar />
      <div className="flex flex-col h-full w-full">
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/prologo" element={<Prologue />} />
          <Route path="/bibliografia" element={<Bibliography />} />
          <Route path="/poesia" element={<Poetry />} />
          <Route path="/fotografias" element={<Photos />} />
        </Routes>
        <footer className="flex self-end w-full justify-center">
          <div>© Copyright 2022</div>
        </footer>
      </div>
    </div>
  );
};

export default App;
