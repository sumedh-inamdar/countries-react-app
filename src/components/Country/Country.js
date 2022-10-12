import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function Country() {
  const { country } = useParams();
  const history = useNavigate();
  const [countryData, setCountryData] = useState({});
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then((json) => {
        setCountryData(json[0]);
        console.log("country set");
      })
      .catch((error) => console.log(error));
  }, [country]);

  useEffect(() => {
    if (countryData.borders) {
      fetch(
        `https://restcountries.com/v2/alpha?codes=${countryData.borders.join(
          ","
        )}`
      )
        .then((res) => res.json())
        .then((json) => {
          setBorders(json.map((country) => country.name));
        })
        .catch((error) => console.log(error));
    }
  }, [countryData]);

  return (
    <main className='max-w-6xl mx-auto px-6'>
      <button
        className='px-6 py-1 bg-white dark:bg-dark-blue space-x-2 flex justify-center items-center drop-shadow-2xl rounded-md my-12'
        onClick={() => history(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <span className='text-sm font-light'>Back</span>
      </button>
      <div className='flex flex-col md:flex-row'>
        <figure className='flex-1'>
          <img
            className='border-8 border-white dark:border-dark-blue rounded-lg'
            src={countryData.flags?.svg}
            alt='flag'
          />
        </figure>
        <section className='flex-1 flex flex-col justify-center'>
          <h2 className='md:ml-16 my-4 text-3xl font-semibold'>
            {countryData.name}
          </h2>
          <section className='md:ml-16 flex flex-col md:flex-row text-sm'>
            <ul className='space-y-4 md:space-y-2'>
              <li>
                <span className='font-semibold'>Native Name:</span>{" "}
                {countryData.nativeName}
              </li>
              <li>
                <span className='font-semibold'>Population:</span>{" "}
                {countryData.population?.toLocaleString("en-US")}
              </li>
              <li>
                <span className='font-semibold'>Region:</span>{" "}
                {countryData.region}
              </li>
              <li>
                <span className='font-semibold'>Sub Region:</span>{" "}
                {countryData.subregion}
              </li>
              <li>
                <span className='font-semibold'>Capital:</span>{" "}
                {countryData.capital}
              </li>
            </ul>
            <ul className='space-y-4 md:space-y-2 mt-8 md:mt-0 md:ml-8'>
              <li>
                <span className='font-semibold'>Top Level Domain:</span>{" "}
                {countryData.topLevelDomain?.[0]}
              </li>
              <li>
                <span className='font-semibold'>Currencies:</span>{" "}
                {countryData.currencies?.map((curr) => curr.name).join(", ")}
              </li>
              <li>
                <span className='font-semibold'>Languages:</span>{" "}
                {countryData.languages?.map((curr) => curr.name).join(", ")}
              </li>
            </ul>
          </section>
          <section className='md:ml-16 mt-12 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2'>
            <h3 className='whitespace-nowrap'>Border Countries: </h3>
            <div className='text-sm flex flex-wrap gap-2'>
              {borders.map((border) => (
                <Link key={border} to={`/${border.toLowerCase()}`}>
                  <div className='px-6 py-1 bg-white dark:bg-dark-blue drop-shadow-2xl rounded-md'>
                    {border}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
