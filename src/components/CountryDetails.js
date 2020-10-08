import React from 'react';
// import countries from '../countries.json';
// import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  const getCountry = props.countries.find(
    (country) => country.cca3 === props.match.country.cca3
  );

  const { country } = props.match;

  if (!country) return null;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <table className="country-table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area} km</td>
            <sup>2</sup>
          </tr>
          <tr>
            <td>
              <ul>
                {country.borders.map((border) => (
                  <li>
                    {
                      props.countries.find((country) => country.cca3 === border)
                        .name.common
                    }
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
