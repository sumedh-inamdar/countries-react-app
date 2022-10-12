import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import debounce from "lodash.debounce";
import Card from "./Card";

function getFilteredCountries(search, region, countries) {
  let regionFiltered = countries;
  if (region !== "")
    regionFiltered = countries.filter(
      (country) => country.region.toLowerCase() === region
    );
  if (search === "") return regionFiltered;
  return regionFiltered.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,nativeName,population,region,capital,flags"
    )
      .then((res) => res.json())
      .then((json) => {
        setCountries(json);
        console.log("countries set");
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCountries = getFilteredCountries(search, region, countries);

  const updateSearch = (e) => setSearch(e.target.value);

  const debounceChange = debounce(updateSearch, 500);

  return (
    <main className='max-w-6xl mx-auto px-6'>
      <nav className='flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between py-6'>
        <div className='bg-white dark:bg-dark-blue px-6'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            className='bg-inherit text-dark-gray dark:text-white px-6 py-2 focus:outline-none'
            type='text'
            onChange={debounceChange}
            placeholder='Search for a country...'
          />
        </div>
        <select
          className='bg-white dark:bg-dark-blue text-sm px-6 py-2 w-min'
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value=''>Filter by Region</option>
          {[...new Set(countries.map((country) => country.region))].map(
            (region) => (
              <option key={region} value={region.toLowerCase()}>
                {region}
              </option>
            )
          )}
        </select>
      </nav>
      <ul className='grid gap-y-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center'>
        {filteredCountries.map((country) => (
          <Link key={country.name} to={`/${country.name.toLowerCase()}`}>
            <Card key={country.name} country={country} />
          </Link>
        ))}
      </ul>
    </main>
  );
}
