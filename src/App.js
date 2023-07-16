
import './App.css';
import { Outlet } from "react-router-dom";
import data from './data.json';
import { ThemeContext } from './context/themeContext';
import { useContext } from 'react';
import Header from './components/header';

function App() {
  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <>
      <div className={isDarkTheme === true ? "app dark" : "app"}>
        <Header />
        <div className='px-[1rem] md:px-[5rem]'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
export async function loader() {
  const countries = await data;
  return { countries };
}

export default App;
