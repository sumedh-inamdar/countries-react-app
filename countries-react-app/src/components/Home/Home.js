import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import debounce from 'lodash.debounce';
import Card from "./Card";

function getFilteredCountries(search, countries) {
    console.log('filter query');
    if (search === '') return countries;
    return countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,population,region,capital,flags"
    )
      .then((res) => res.json())
      .then((json) => {
        setCountries(json);
        console.log('countries set');
      });
  }, []);

  const filteredCountries = getFilteredCountries(search, countries);

  const updateSearch = e => setSearch(e.target.value);

  const debounceChange = debounce(updateSearch, 500);

  return (
    <main className='bg-very-dark-blue max-w-6xl mx-auto px-6 h-full'>
      <div className='flex justify-between py-6'>
        <div className='bg-dark-blue px-6'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            className='bg-dark-blue px-6 py-2 focus:outline-none'
            type='text'
            onChange={debounceChange}
            placeholder='Search for a country...'
          />
        </div>
        <select className='bg-dark-blue text-sm px-6 py-2'>
          <option value=''>Filter by Region</option>
          <option value='test1'>Test1</option>
          <option value='test2'>Test2</option>
        </select>
      </div>
      <div className="grid gap-y-12 grid-cols-4 justify-items-center">{filteredCountries.map((country) => <Card key={country.name} country={country} />)}</div>
    </main>
  );
}
