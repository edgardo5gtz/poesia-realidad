const Page = ({ title, content }) => {
  return (
    <div className="flex flex-col">
      <div className="my-8">
        <h1 className="text-center ">{title}</h1>
      </div>
      <p className="my-8 px-36">{content}</p>
    </div>
  );
};

export default Page;
