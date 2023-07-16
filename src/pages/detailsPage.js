
import { Link } from "react-router-dom";
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { BsArrowLeft } from 'react-icons/bs'
import data from '../data.json';

export default function DetailPage() {
    const { country } = useLoaderData();
    const { isDarkTheme } = useContext(ThemeContext);
    console.log(country)
    return (
        <div id="detailsPage">

            <Link to={`/`}>
                <span className={`flex items-center gap-4 w-min  rounded-md py-2 px-8 shadow-lg text-[16px]
                ${isDarkTheme ? ' bg-[#2b3945]' : ' bg-white'} `}>
                    <BsArrowLeft /> Back</span></Link>
            <div className=" my-5 columns-1 lg:columns-2">
                <div className="w-4/5 mb-5">
                    <img className="w-full" src={country[0].flags?.png} alt="" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-5">{country[0].name}</h2>
                    <div className="flex flex-wrap mb-8">
                        <div>
                            <p><span className="font-semibold">Native Name:</span> {country[0].name}</p>
                            <p><span className="font-semibold">Population:</span> {country[0].population}</p>
                            <p><span className="font-semibold">Region:</span> {country[0].region}</p>
                            <p><span className="font-semibold">Sub Region:</span> {country[0].subregion}</p>
                            <p><span className="font-semibold">Capital:</span> {country[0].capital}</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Top Level Domain:</span> {country[0].population}</p>
                            <p><span className="font-semibold">Currencies:</span> {country[0].population}</p>
                            <p><span className="font-semibold">Languages:</span> {country[0].population}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center">
                        <p className="font-semiibold">Border Countries:</p>
                        {country[0].borders.map((b) => {


                            return ((data.map((d) => {
                                console.log(d.region)
                                if (d.alpha3Code === b) {
                                    return <Link key={b} to={`details/${b}`} className={` rounded-md py-2 px-8 shadow-lg text-[16px]
                                    ${isDarkTheme ? ' bg-[#2b3945]' : ' bg-white'} `}>{d.name}</Link>
                                }
                            })
                            ))
                        })}

                    </div>

                </div>


            </div>

        </div>
    );
}
export async function loader({ params }) {

    const country = await data.filter((c) => c.alpha3Code === params.detailId);
    return { country };
}

