
import './App.css';
import { Outlet,Link  , useLoaderData,} from "react-router-dom";
import data from './data.json';
function App() {
  const { countries } = useLoaderData();
  console.log(countries)
  return (
    <>
     
      <div>

      {countries.length ? (
            <ul>
              {countries.map((country) => (
                <li key={country.name}>
                  <Link to={`details/${country.alpha3Code}`}>
                  {country.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
       

      </div>
      <div id="detail">
      <Outlet />
      </div>
    </>
  );
}
export async function loader() {
  const countries = await data;
  return { countries };
}

export default App;
