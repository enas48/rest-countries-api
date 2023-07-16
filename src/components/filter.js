import { AiOutlineDown } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/themeContext';
export default function Filter(props) {
    const { isDarkTheme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className='mb-5 relative'>
            <button
                onClick={handleOpen}
                className={`flex items-center gap-8  rounded-md p-4  shadow-md text-[16px]
                ${isDarkTheme ? ' bg-[#2b3945]' : ' bg-white'} `} >
                <span> Filter by Region</span>
                <AiOutlineDown className={`rotate-180  transition ease-in-out duration-300
                    ${open ? ' rotate-180  ' : ' rotate-0'} `} />
            </button>
            {<ul className={`flex flex-col w-full overflow-hidden cursor-pointer transition ease-in-out duration-300 absolute  rounded-md  mt-1 shadow-md text-[16px]
                ${isDarkTheme ? ' bg-[#2b3945]' : ' bg-white'} 
                ${open ? ' opacity-100 ' : ' opacity-0 '} `}>
                <ListItem id="Africa" name="Africa" filterCountry={props.filterCountry} />
                <ListItem id="Americas" name="America" filterCountry={props.filterCountry} />
                <ListItem id="Asia" name="Asia" filterCountry={props.filterCountry} />
                <ListItem id="Europe" name="Europe" filterCountry={props.filterCountry} />
                <ListItem id="Oceania" name="Oceania" filterCountry={props.filterCountry} />
            </ul>}
        </div>)
}
function ListItem(props) {
    const { isDarkTheme } = useContext(ThemeContext);
    return (
        <li className={`
        ${isDarkTheme ? ' hover:bg-[#273441]]' : ' hover:bg-[#eee]'} `}>
            <button className='w-full h-full py-2 px-4' onClick={props.filterCountry} id={props.id}>{props.name}</button>
        </li>
    )
}