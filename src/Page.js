const Page = ({ title, content }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="my-8">
        <h1 className="text-center ">{title}</h1>
      </div>
      <div className="my-8 px-56">{content}</div>
    </div>
  );
};

export default Page;
