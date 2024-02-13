import { useLoaderData } from 'react-router-dom';

export const Root = () => {
  const data = useLoaderData();
  return (
    <div className="h-full flex flex-wrap justify-center p-[30px] gap-[90px]">
      {data.map((el) => (
        <div onClick={console.log(el.name.official)}>
          <img src={`${el.flags.png}`} alt="" className="h-[200px] w-[270px]" />
          <h1 className="w-56">{el.name.official}</h1>
        </div>
      ))}
    </div>
  );
};
