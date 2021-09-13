import { Link } from 'react-router-dom';

export default function CountryDetails({
  match: { params: { alpha3Code } },
  countries
}) {
  const country = countries.find(currCountry => currCountry.alpha3Code === alpha3Code)

  if (!country) {
    return <p>Invalid country alpha3Code</p>
  }

  const countriesBorder = country.borders
    .map(countryBorder => countries.find(c => c.alpha3Code === countryBorder))

  return (
    <div className="CountryDetails">
      <h1>{country.name}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td width="30%">
              Capital
            </td>
            <td>
              {country.capital}
            </td>
          </tr>

          <tr>
            <td width="30%">
              Area
            </td>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>

          {countriesBorder.length > 0 && (
            <tr>
              <td width="30%">
                Borders
              </td>
              <td>
                <ul>
                  {countriesBorder.map(countryBorder => (
                    <li key={countryBorder.alpha3Code}>
                      <Link to={`/countries/${countryBorder.alpha3Code}`}>
                        {countryBorder.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}