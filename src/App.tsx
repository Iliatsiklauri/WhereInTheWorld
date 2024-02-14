import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import { Root } from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import { useState } from 'react';

function App() {
  const [countryId, setCountryId] = useState(1);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route
          index
          element={<Home setCountryId={setCountryId} />}
          loader={async () => {
            return fetch('https://restcountries.com/v3.1/all');
          }}
        />
        <Route
          path="about"
          element={<About countryId={countryId} />}
          loader={async () => {
            return fetch(`https://restcountries.com/v3.1/all`);
          }}
        />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
