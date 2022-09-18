import { Route, Routes, Navigate } from "react-router-dom";
import Biography from "./routes/Biography";
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
          <Route path="/biografia" element={<Biography />} />
          <Route path="/poesia" element={<Poetry />} />
          <Route path="/fotografias" element={<Photos />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <footer className="flex self-end w-full justify-center">
          <div>© Copyright 2022</div>
        </footer>
      </div>
    </div>
  );
};

export default App;
