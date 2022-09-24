import { Link } from "react-router-dom";
import { getTitles } from "../data/poems";

const PoetryIndex = () => {
  const titles = getTitles();
  console.log({ titles });
  return (
    <nav className="flex flex-col items-center">
      {titles.map((title) => {
        return (
          <Link
            className="block p-2 pl-8"
            to={`/poesia/${title.link}`}
            key={title.link}
          >
            {title.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default PoetryIndex;
