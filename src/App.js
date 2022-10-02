import { Route, Routes, Navigate } from "react-router-dom";
import Biography from "./routes/Biography";
import Poetry from "./routes/Poetry";
import PoetryIndex from "./routes/PoetryIndex";
import Poem from "./routes/Poem";
import Prologue from "./routes/Prologue";
import Title from "./routes/Title";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <>
      <div className="flex min-h-full">
        <Sidebar />
        <div className="flex flex-col min-h-full min-w-full">
          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="prologo" element={<Prologue />} />
            <Route path="biografia" element={<Biography />} />
            <Route path="poesia" element={<Poetry />}>
              <Route index element={<PoetryIndex />} />
              <Route path=":poemName" element={<Poem />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
      <footer className="flex justify-center">
        <span>Derechos reservados ©</span>
      </footer>
    </>
  );
};

export default App;
