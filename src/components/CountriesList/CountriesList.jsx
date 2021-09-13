import { Link } from 'react-router-dom';
import './CountriesList.css';

export default function CountriesList({ countries }) {
  
  return (
    <ul className="CountriesList list-group">
      {countries.map(country => (
        <li key={country.cca3} className="list-group-item">
          <Link
            to={`/countries/${country.cca3}`}
            className="text-decoration-none list-group-item-action"
          >
            {country.flag} {country.name.common}
          </Link>
        </li>
      ))}
    </ul>
  )
}