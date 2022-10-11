export default function Card({ country }) {
  return (
    <li className='bg-dark-blue h-72 w-48 flex flex-col rounded'>
      <figure className='flex-1 flex flex-col justify-center p-3'>
        <img className='max-h-36' alt='flag' src={country.flags.svg} />
      </figure>
      <section className='flex-1 pl-4'>
        <h2 className='font-extrabold text-sm my-4'>{country.name}</h2>
        <ul className='text-xs space-y-1'>
          <li>
            <span className='font-extrabold'>Population:</span>{" "}
            {country.population.toLocaleString("en-US")}
          </li>
          <li>
            <span className='font-extrabold'>Region:</span> {country.region}
          </li>
          <li>
            <span className='font-extrabold'>Capital:</span> {country.capital}
          </li>
        </ul>
      </section>
    </li>
  );
}
