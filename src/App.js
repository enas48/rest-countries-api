
import './App.css';
import { Outlet,Link  , useLoaderData,} from "react-router-dom";
import data from './data.json';
import { ThemeContext } from './context/themeContext';
import { useContext } from 'react';
import Header from './components/header';

function App() {
  const {isDarkTheme}=useContext(ThemeContext)
  const { countries } = useLoaderData();
  console.log(countries)
  return (
    <>
     
      <div className={isDarkTheme===true?"app dark":"app"}>
      <Header/>
      <div className='px-[4rem]'>
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
