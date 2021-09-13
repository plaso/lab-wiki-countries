import { Link } from 'react-router-dom';
import './CountriesList.css';

export default function CountriesList({ countries }) {
  
  return (
    <ul className="CountriesList list-group">
      {countries.map(country => (
        <li key={country.alpha3Code} className="list-group-item">
          <Link
            to={`/countries/${country.alpha3Code}`}
            className="text-decoration-none list-group-item-action"
          >
            <img src={country.flag} height={16} alt={country.name} />
            {" "}{country.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}