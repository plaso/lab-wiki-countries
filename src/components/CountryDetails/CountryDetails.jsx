import { Link } from 'react-router-dom';

export default function CountryDetails({
  match: { params: { cca3 } },
  countries
}) {
  const country = countries.find(currCountry => currCountry.cca3 === cca3)

  if (!country) {
    return <p>Invalid country CCA3</p>
  }

  const countriesBorder = country.borders
    .map(countryBorder => countries.find(c => c.cca3 === countryBorder))

  return (
    <div className="CountryDetails">
      <h1>{country.name.common}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td width="30%">
              Capital
            </td>
            <td>
              {country.capital[0]}
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
                    <li key={countryBorder.cca3}>
                      <Link to={`/countries/${countryBorder.cca3}`}>
                        {countryBorder.name.common}
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