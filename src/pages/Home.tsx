import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

type Country = {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital: string;
};

const Home = () => {
  const data = useLoaderData() as Country[];

  const [search, setSearch] = useState('');
  const [selectedContinent, setSelectedContinent] = useState<string>('');

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const changeContinent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedContinent(e.target.value);
  };

  const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const filteredData = data.filter(
    (el) =>
      el.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (selectedContinent === '' || el.region === selectedContinent)
  );
  console.log(filteredData);
  return (
    <div className="bg-[#202C36]">
      <div className="flex items-start gap-4 p-4 flex-col md:flex-row">
        <div className="flex w-[343px] items-center justify-around bg-[#2B3844] ">
          <img src="search.svg" alt="" className="" />
          <input
            className="text-white w-[80%] h-12  rounded-sm bg-[#2B3844]"
            type="text"
            placeholder="Search by country"
            onChange={changeInput}
          />
        </div>
        <select
          onChange={changeContinent}
          value={selectedContinent}
          className="mb-[10px] w-[200px] h-12 bg-[#2B3844] rounded-sm "
        >
          <option value="" disabled hidden>
            Choose a continent
          </option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
      </div>
      <div className="h-full min-h-screen w-full flex flex-wrap justify-center bg-[#202C36] p-[30px] gap-[90px]">
        {filteredData.map((el, id) => (
          <Link key={id} to={`/${el.name.common}`}>
            <div className="cursor-pointer w-[264px] h-[336px] bg-[#2B3844] rounded-md">
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
