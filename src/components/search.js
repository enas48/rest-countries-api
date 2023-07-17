import { AiOutlineSearch } from 'react-icons/ai'
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/themeContext';

export default function Search(props) {
  const { isDarkTheme } = useContext(ThemeContext)
  const [searchField, setSearchField] = useState("");
  const handleChange = e => {
    setSearchField(e.target.value);
    props.searchCountry(e.target.value)
  };

  return (
    <label className="relative block w-96 mb-5">
      <span className="sr-only" role="search">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-4">
        <AiOutlineSearch className={` ${isDarkTheme ? 'text-[#ffffff]' : 'text-slate-600'} `}
        />
      </span>
      <input
        value={searchField}
        onChange={handleChange}
        className={`block w-full border border-none text-[16px] rounded-md py-4 pl-11 pr-4 shadow-md focus:outline-none focus:border-slate-800 focus:ring-slate-600 focus:ring-1
            ${isDarkTheme ? 'placeholder:text-[#ffffff] bg-[#2b3945]' :
            'placeholder:text-slate-400 bg-white'} `}
        placeholder="Search for a country..." type="text" name="search" />
    </label>)
}