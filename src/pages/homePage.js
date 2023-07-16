
import { useLoaderData } from "react-router-dom";
import CountryCard from "../components/countryCard";
import Search from "../components/search";
import data from '../data.json';
import Filter from "../components/filter";
import { useState } from "react";

export default function HomePage() {
    const { countries } = useLoaderData();
    let [filterCountries, setFilteredCountries] = useState(countries)

    const onFilterCountry = (e) => {
        let region = e.target.id;
        let filterd = countries.filter((country) => {
            return country.region === region
        })
        setFilteredCountries(filterd)
    }
    const onCountrySearch = (value) => {
        console.log(value)
        let filterd = countries.filter((c) => c.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredCountries(filterd)

    }
    return (
        <>
            <div className="flex justify-between items-center flex-wrap mb-5">
                <Search searchCountry={onCountrySearch} />
                <Filter filterCountry={onFilterCountry} />
            </div>
            <div className="">
                {filterCountries.length ? (
                    <div className="flex  gap-10 flex-wrap justify-center">
                        {filterCountries.map((country) => (
                            <CountryCard country={country} key={country.name} />
                        ))}
                    </div>
                ) : (
                    <p>
                        <i>No countries</i>
                    </p>
                )}
            </div>
        </>
    );
}
export async function loader() {
    const countries = await data;
    return { countries };
}
