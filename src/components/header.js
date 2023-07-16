import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';
import { BsMoon, BsSunFill } from 'react-icons/bs';
export default function Header() {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext)
    return (
        <div
            className={`flex  justify-between py-5 shadow-md px-[1rem] md:px-[5rem] mb-10
                ${isDarkTheme ? ' bg-[#2b3945]' :
                    ' bg-white'} `} >

            <h2 className='font-bold text-[1.2rem] md:text-[1.4rem]'>Where in the world?</h2>
            <button className='button' onClick={toggleTheme.bind(null)}>{
                isDarkTheme === true ?
                    <div className='flex items-center gap-2'>
                        <BsSunFill />
                        <span className='font-semibold'>Light Mode</span>
                    </div> :
                    <div className='flex items-center gap-2'>
                        <BsMoon />
                        <span className='font-semibold'>Dark Mode</span>
                    </div>
            }</button>

        </div>
    );
}
