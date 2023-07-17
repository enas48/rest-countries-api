
import { useLoaderData } from "react-router-dom";
import CountryCard from "../components/countryCard";
import Search from "../components/search";
import data from '../data.json';
import Filter from "../components/filter";
import { useState, useMemo } from "react";
import Pagination from "../components/pagination";

let PageSize = 10;

export default function HomePage() {
    const { countries } = useLoaderData();
    let [filterCountries, setFilteredCountries] = useState(countries)

    /*pagination*/
    const [currentPage, setCurrentPage] = useState(1);
    const currentData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return filterCountries.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);



    const onFilterCountry = (e) => {
        let region = e.target.id;
        if (region === 'all') {
            setFilteredCountries(countries)
        } else {
            let filterd = countries.filter((country) => {
                return country.region === region
            })
            setFilteredCountries(filterd)
        }
    }
    const onCountrySearch = (value) => {
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
                    <div className="flex  gap-10 flex-wrap justify-between">
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
            {/* <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            /> */}
        </>
    );
}
export async function loader() {
    const countries = await data;
    return { countries };
}
