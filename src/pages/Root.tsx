import { useLoaderData } from 'react-router-dom';

export const Root = () => {
  const data = useLoaderData();
  return (
    <div className="h-full w-full flex flex-wrap justify-center p-[30px] gap-[90px]">
      {data.map((el) => (
        <div className="">
          <img src={`${el.flags.png}`} alt="" className="w-[270px] h-[200px]" />
          <h1 className="w-56">{el.name.official}</h1>
        </div>
      ))}
    </div>
  );
};
