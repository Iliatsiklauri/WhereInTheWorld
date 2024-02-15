import { useLoaderData } from 'react-router-dom';
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
    <div>
      <img src={`${data[0].flags?.png}`} alt="" />
      <div>
        <h1>saxeli {data[0].name.common}</h1>
        <h1>vinc ccxovrobs {data[0].demonyms.eng.f}</h1>
        <h1>1{data[0].population}</h1>
        <h1>2{data[0].region}</h1>
        <h1>3{data[0].subregion}</h1>
        <h1>4 დედაქალაქი{data[0].capital}</h1>
        <h1>top level domain {data[0].tld}</h1>
        {/* <h1>6{data[0]?.currencies}</h1> */}
        <h1>
          borders
          {data[0].borders?.map((el, key) => (
            <p key={key}>{el}</p>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default About;
