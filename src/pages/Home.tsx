import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-[#202C36]">
      <div className="h-full w-full flex flex-wrap justify-center bg-[#202C36] p-[30px] gap-[90px]">
        {data.map((el, id) => (
          <Link to={'/about'}>
            <div
              key={id}
              className="cursor-pointer  w-[264px] h-[336px] bg-[#2B3844] rounded-md"
            >
              <img src={`${el.flags.png}`} alt="" className="w-[264px] h-[160px]" />
              <div className="p-6 flex flex-col">
                <h1 className="w-56 text-white mb-4 text-xl font-semibold leading-26">
                  {el.name.common}
                </h1>
                <div className="flex">
                  <p className="text-white text-14 font-semibold leading-16">
                    Population:
                  </p>
                  <p className="pl-2 text-white text-14 font-light leading-16">
                    {el.population}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-white text-14 font-semibold leading-16">Region:</p>
                  <p className="pl-2 text-white text-14 font-light leading-16">
                    {el.region}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-white text-14 font-semibold leading-16">Capital:</p>
                  <p className="pl-2 text-white text-14 font-light leading-16">
                    {el.capital}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
