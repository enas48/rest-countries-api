import { Link } from "react-router-dom";
import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';

export default function CountryCard(props) {
    const { isDarkTheme } = useContext(ThemeContext)
    let country = props.country
    return (
        <>

            <Link to={`details/${country.alpha3Code}`} className="m-auto">
                <div className={`flex flex-col w-[18rem] overflow-hidden gap-2 mb-10  rounded-md shadow-md text-[16px]
                ${isDarkTheme ? ' bg-[#2b3945]' : ' bg-white'} `}>

                    <img className="w-full h-[160px]" src={country.flags.png} alt={country?.name} />

                    <div className=" p-4 ">
                        <h3 className="font-semibold text-[20px] text-ellipsis overflow-hidden">{country.name.length > 20 ? `${country.name.slice(0, 20)}...` : country.name}</h3>
                    </div>
                    <div className=" p-4 pt-0">
                        <p><span className="font-semibold">Population:</span> {country?.population.toLocaleString()}</p>
                        <p><span className="font-semibold">Region:</span> {country?.region}</p>
                        <p><span className="font-semibold">Capital:</span> {country?.capital ? country.capital : '-'}</p>
                    </div>
                </div>
            </Link>

        </>
    );
}
