export default function Card({ country }) {
  return (
    <div className='bg-dark-blue h-72 w-48 flex flex-col'>
      <img className='flex-1 max-h-36' alt='flag' src={country.flags.svg} />
      <div className='flex-1 pl-4'>
        <div className='font-bold text-sm my-4'>{country.name}</div>
        <div className='text-xs space-y-1'>
          <div>
            <b>Population:</b> {country.population.toLocaleString("en-US")}
          </div>
          <div>
            <b>Region:</b> {country.region}
          </div>
          <div>
            <b>Capital:</b> {country.capital}
          </div>
        </div>
      </div>
    </div>
  );
}
