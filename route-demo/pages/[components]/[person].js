import {useRouter} from "next/router";

export  default function Person({ownersList}) {
    const router=useRouter();
    console.log(router.query);
    return <pre>{JSON.stringify(ownersList,null,4)}</pre>
}


Person.getInitialProps = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const ownersList = await response.json();
    return {ownersList: ownersList}
}