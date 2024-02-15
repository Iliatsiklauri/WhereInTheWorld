import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital: string;
}

const Home: React.FC = () => {
  const data = useLoaderData() as Country[];

  const [search, setSearch] = useState('');
  const [selectedContinent, setSelectedContinent] = useState<string>(''); // Set an appropriate initial value

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const changeContinent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedContinent(e.target.value);
  };

  const filteredData = data.filter(
    (el) =>
      el.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (selectedContinent === '' || el.region === selectedContinent)
  );

  const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <div className="bg-[#202C36]">
      <div className="flex items-center gap-4 p-4">
        <input type="text" placeholder="Search by country" onChange={changeInput} />
        <select onChange={changeContinent} value={selectedContinent}>
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
      <div className="h-full w-full flex flex-wrap justify-center bg-[#202C36] p-[30px] gap-[90px]">
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
