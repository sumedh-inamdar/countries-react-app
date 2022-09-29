import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

export default function Home() {
  const [regions, setRegions] = useState([]);
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

  return (
    <main className='bg-very-dark-blue max-w-6xl mx-auto px-6 h-full'>
      <div className='flex justify-between py-6'>
        <div className='bg-dark-blue px-6'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            className='bg-dark-blue px-6 py-2 focus:outline-none'
            type='text'
            placeholder='Search for a country...'
          />
        </div>
        <select className='bg-dark-blue text-sm px-6 py-2'>
          <option value=''>Filter by Region</option>
          <option value='test1'>Test1</option>
          <option value='test2'>Test2</option>
        </select>
      </div>
      <div className="grid grid-cols-4">{countries.map((country) => <Card key={country.name} country={country} />)}</div>
    </main>
  );
}
