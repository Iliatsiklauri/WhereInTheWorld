import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="">
      <header className="w-full h-[80px] bg-[#2B3844] flex justify-between items-center p-4">
        <h1 className="text-white text-14 font-extrabold leading-20">
          Where in the world?
        </h1>
        <h1 className="bg-white w-[100%] h-[700px] flex items-center justify-center font-extrabold text-4xl">
          დასამთავრებელიაააააა
        </h1>
        <div className="flex gap-2">
          <img src="public\Group 3 (1).png" alt="" className="w-4 h-4" />
          <h1 className="text-white text-xs font-semibold">Dark Mode</h1>
        </div>
      </header>

      <Outlet />
    </div>
  );
};
