import { useLoaderData } from 'react-router-dom';

const About = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1>{data[0].name.common}</h1>
    </div>
  );
};

export default About;
