import { useLoaderData } from 'react-router-dom';

const About = ({ countryId }) => {
  const data = useLoaderData();
  console.log(countryId);
  return (
    <div>
      <h1>{data[countryId].name.common}</h1>
    </div>
  );
};

export default About;
