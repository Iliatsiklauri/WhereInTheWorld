import { Link, useLoaderData } from 'react-router-dom';
interface CountryData {
  flags?: {
    png: string;
  };
  name: {
    common: string;
  };
  demonyms: {
    eng: {
      f: string;
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string[];
  languages: {
    [index: number]: {
      name: string;
    };
  }[];
  borders: string[];
}
const About = () => {
  const data = useLoaderData() as CountryData[];
  return (
    <div className="bg-[#202C36] h-screen flex flex-col items-center ">
      <Link to="/" className="w-[104px] h-8 ">
        back
      </Link>
      <div>
        <img src={`${data[0].flags?.png}`} alt="" className="" />
        <div className="">
          <div className="flex-row flex items-center justify-start">
            <p></p>
            <p
              className="text-white font-nunito-sans text-14 font-normal leading-8
"
            >
              {data[0].name.common}
            </p>
          </div>
          <div className="">
            <div className="flex-row flex items-center justify-start">
              <p
                className="text-white font-nunito-sans text-14 font-normal leading-32
"
              >
                Native name :
              </p>
              <p
                className="text-white font-nunito-sans text-14 font-normal leading-8
"
              >
                {data[0].demonyms.eng.f}
              </p>
            </div>
            <div className="flex-row flex items-center justify-start">
              <p
                className="text-white font-nunito-sans text-14 font-normal leading-32
"
              >
                Population :
              </p>
              <p
                className="text-white font-nunito-sans text-14 font-normal leading-8
"
              >
                {data[0].population}
              </p>
            </div>
            <div className="flex-row flex items-center justify-start">
              <p
                className="text-white font-nunito-sans text-14 font-normal leading-32
"
              >
                Region :
              </p>
              <p
                className="text-white font-nunito-sans text-14 font-normal leading-8
"
              >
                {data[0].region}
              </p>
            </div>
            <div className="flex-row flex items-center justify-start">
              <p
                className="text-white font-nunito-sans text-14 font-normal leading-32
"
              >
                Subregion :
              </p>
              <p
                className="text-white font-nunito-sans text-14 font-normal leading-8
"
              >
                {data[0].subregion}
              </p>
            </div>
            <div className="flex-row flex items-center justify-start">
              <p
                className="text-white font-nunito-sans text-14 font-normal leading-32
"
              >
                Capital :
              </p>
              <p
                className="text-white font-nunito-sans text-14 font-normal leading-8
"
              >
                {data[0].capital}
              </p>
            </div>
            <div className="flex-row flex items-center justify-start">
              <p
                className="text-white font-nunito-sans text-14 font-normal leading-32
"
              >
                Top level domain :
              </p>
              <p
                className="text-white font-nunito-sans text-14 font-normal leading-8
"
              >
                {data[0].tld}
              </p>
            </div>
          </div>
          <div className="h-[90px] flex flex-col gap-4">
            <p
              className="text-white font-nunito-sans text-16 font-semibold leading-6
"
            >
              Border Countries:
            </p>
            <div className="flex gap-4 flex-wrap w-[340px]">
              {data[0].borders?.map((el, key) => (
                <div
                  className="w-20 h-7 bg-[#2B3844] flex items-center justify-center cursor-pointer"
                  key={key}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
