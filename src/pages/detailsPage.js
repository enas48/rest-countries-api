
import { Link } from "react-router-dom";
import { useLoaderData } from 'react-router-dom';
import data from '../data.json';
export default function DetailPage() {
    const { country } = useLoaderData();
    console.log(country)
    return (
        <div id="detailsPage" className="app">

            <Link to={`/`}>back</Link>
            <img src={country[0].flags?.png} alt=""/>
            <p>{country[0].name}</p>
        </div>
    );
}
export async function loader({ params }) {

    const country = await data.filter((c) => c.alpha3Code === params.detailId);
    return { country };
}

