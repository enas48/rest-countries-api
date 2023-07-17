
import { Link } from "react-router-dom";
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { BsArrowLeft } from 'react-icons/bs'
import data from '../data.json';

export default function DetailPage() {
    const { country } = useLoaderData();
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <div id="detailsPage">

            <Link to={`/`}>
                <span className={`flex items-center mb-10 gap-4 w-min  rounded-md py-2 px-8 shadow-lg text-[16px]
                ${isDarkTheme ? ' bg-[#2b3945] hover:bg-white hover:text-[#2b3945]' : ' bg-white hover:bg-[#2b3945] hover:text-[#fff]'} `}>
                    <BsArrowLeft /> Back</span></Link>
            <div className=" my-5 columns-1 lg:columns-2">
                <div className="w-4/5 mb-5">
                    <img className="w-full" src={country.flags?.png} alt="" />
                </div>
                <div >
                    <h2 className="text-2xl font-bold mb-5">{country.name}</h2>
                    <div className="flex flex-wrap mb-8">
                        <div className="pr-6 mb-8 sm:mb-0">
                            <p className="mb-3"><span className="font-semibold">Native Name:</span> {country?.name}</p>
                            <p className="mb-3"><span className="font-semibold">Population: </span> {country?.population.toLocaleString()} </p>
                            <p className="mb-3"><span className="font-semibold">Region:</span> {country?.region}</p>
                            <p className="mb-3"><span className="font-semibold">Sub Region:</span> {country?.subregion}</p>
                            <p className="mb-3"><span className="font-semibold">Capital:</span> {country?.capital ? country.capital : '_'}</p>
                        </div>
                        <div>
                            <p className="mb-3"><span className="font-semibold">Top Level Domain: </span>
                                {country?.topLevelDomain && country.topLevelDomain.map((l, i) => <span key={l}>{country.topLevelDomain.length - 1 !== i ? `${l}, ` : `${l}`}</span>)}</p>
                            <p className="mb-3"><span className="font-semibold">Currencies: </span>
                                {country?.currencies && country.currencies.map((l, i) => <span key={l.name}> {country.currencies.length - 1 !== i ? `${l.name}, ` : `${l.name}`} </span>)}
                            </p>
                            <p className="mb-3"><span className="font-semibold">Languages: </span>
                                {country?.languages && country.languages.map((l, i) => <span key={l.name}>{country.languages.length - 1 !== i ? `${l.name}, ` : `${l.name}`}</span>)}</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-top">
                        <p className="font-semibold w-max">Border&nbsp;Countries:</p>
                        <div className="flex flex-wrap gap-4 items-baseline">
                            {country?.borders && country.borders.map((b) => {
                                return ((data.map((d) => {
                                    if (d.alpha3Code === b) {
                                        return <Link key={b} to={`../details/${b}`} className={` rounded-md py-2 px-8 shadow-lg text-[16px]
                                    ${isDarkTheme ? ' bg-[#2b3945]' : ' bg-white'} `}>{d.name}</Link>
                                    }
                                    return true
                                })
                                ))
                            })}
                            {!country?.borders && 'none'}
                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
}
export async function loader({ params }) {

    let country = await data.filter((c) => c.alpha3Code === params.detailId);
    country = country[0]
    return { country };
}

