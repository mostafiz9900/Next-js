import Link from "next/link";
import {useState,useEffect} from 'react'
export default function Details({ownersList}) {

    // const [owners, setOwners] = useState([]);
    // useEffect(() => {
    //   async function loadData() {
    //     const response = await fetch('https://restcountries.eu/rest/v2/all');
    //     const ownersList = await response.json();
    //     setOwners(ownersList);
    //     console.log(setOwners);
    //   }
    //
    //   loadData();
    // }, []);

    return (
        <div>
            {ownersList.map((e, index) => (
                <div key={index}>
                    <Link as={`/${e.name}/${e.capital}`} href="/[components]/[person]">
                        <a>
                             {e.name}, {e.capital}
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
}


Details.getInitialProps = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const ownersList = await response.json();
    return {ownersList: ownersList}
}