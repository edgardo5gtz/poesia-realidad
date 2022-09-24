import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { getPoems } from "../data/poems";

const Poem = () => {
  const params = useParams();
  const poems = getPoems();
  const currentPoem = poems[params.poemName];
  return (
    <div className="flex flex-col items-center">
      <div className="my-8">{currentPoem.title}</div>
      <div className="my-8">{parse(currentPoem.body)}</div>
      <div className="my-8">{parse(currentPoem.footer)}</div>
    </div>
  );
};

export default Poem;
