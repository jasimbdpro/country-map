import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { nameCommon } = useParams();
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${nameCommon}`)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    })
    const [country, setCountry] = useState({})
    console.log(country)
    return (
        <div>
            <h2>Country Name: {country.name?.common}</h2>
            <p>Official Name: {country.name?.official}</p>
            {country.independent ? (<p>Independent: Yes</p>) : (<p>Independent: No</p>)}
            <p>Capital: {country.capital}</p>
            <a rel='noreferrer' href={country.maps?.googleMaps} target='_blank'> Show Map </a>
        </div>
    );
};

export default CountryDetails;