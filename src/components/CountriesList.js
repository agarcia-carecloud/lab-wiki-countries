import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

export default function CountriesList(props) {
  return (
    <div className="country-style">
      {countries.map((eachCountry) => {
        return (
          <li key={eachCountry.cca3}>
            <Link to={`/countries/${eachCountry.cca3}`}>
              {eachCountry.flag} {eachCountry.name.common}
            </Link>
          </li>
        );
      })}
    </div>
  );
}
