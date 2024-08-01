import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name } = props.country
    const CountryStyle = {
        color: 'gray',
        border: '1px solid gray',
        margin: '10px',
        padding: '10px'

    }
    return (
        <div style={CountryStyle}>
            <h3>{name.common}</h3>
            <p>{name.official}</p>
            <Link to={`name/${name.common}`}>Show Details</Link>

        </div>
    );
};

export default Country;