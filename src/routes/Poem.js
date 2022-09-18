import { useParams } from "react-router-dom";

const Poem = () => {
  const params = useParams();
  return <div>{params.poemName}</div>;
};

export default Poem;
