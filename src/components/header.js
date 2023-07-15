import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';

export default function Header() {
    const {isDarkTheme, toggleTheme}=useContext(ThemeContext)
    return (
        <div className="flex  justify-between py-4 shadow-md px-[4rem] mb-5">
            <h2>Where in the world?</h2>
            <button className='button' onClick={toggleTheme.bind(null)}>{
          `${isDarkTheme===true?"light Mode":"Dark Mode"}`
        }</button>
       
        </div>
    );
}
