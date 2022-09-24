import { Route, Routes, Navigate } from "react-router-dom";
import Biography from "./routes/Biography";
import Photos from "./routes/Photos";
import Poetry from "./routes/Poetry";
import PoetryIndex from "./routes/PoetryIndex";
import Poem from "./routes/Poem";
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
          <Route path="prologo" element={<Prologue />} />
          <Route path="biografia" element={<Biography />} />
          <Route path="fotografias" element={<Photos />} />
          <Route path="poesia" element={<Poetry />}>
            <Route index element={<PoetryIndex />} />
            <Route path=":poemName" element={<Poem />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
