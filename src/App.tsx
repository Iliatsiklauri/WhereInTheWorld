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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route
          index
          element={<Home />}
          loader={async () => {
            return fetch('https://restcountries.com/v3.1/all');
          }}
        />
        <Route
          path=":id"
          element={<About />}
          loader={async ({ params }) => {
            return fetch(`https://restcountries.com/v3.1/name/${params.id}`);
          }}
        />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
