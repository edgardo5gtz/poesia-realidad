import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { getPoems } from "../data/poems";
import { getTitles } from "../data/poems";

const Poem = () => {
  const params = useParams();
  const poems = getPoems();
  const currentPoem = poems[params.poemName];
  const poemList = getTitles();
  const currentPoemIndex = poemList.findIndex(
    (poem) => poem.name === currentPoem.title
  );
  const nextPoemIndex = (currentPoemIndex + 1) % poemList.length;
  const previousPoemIndex =
    currentPoemIndex === 0 ? poemList.length - 1 : currentPoemIndex - 1;
  const nextPoem = poemList[nextPoemIndex];
  const previousPoem = poemList[previousPoemIndex];
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="my-8">{currentPoem.title}</div>
        <div className="my-8">{parse(currentPoem.body)}</div>
        <div className="my-8">{parse(currentPoem.footer)}</div>
      </div>
      <div className="flex justify-between mt-8">
        <Link
          className="text-center"
          to={`/poesia/${previousPoem.link}`}
          key={previousPoem.link}
        >
          {previousPoem.name}
        </Link>
        <Link
          className="text-center"
          to={`/poesia/${nextPoem.link}`}
          key={nextPoem.link}
        >
          {nextPoem.name}
        </Link>
      </div>
    </>
  );
};

export default Poem;
