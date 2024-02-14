import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="">
      <header className="w-full h-[80px] bg-black">ilia</header>

      <Outlet />
    </div>
  );
};
