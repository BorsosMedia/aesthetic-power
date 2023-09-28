import { GrayButton } from '../GrayButton/GrayButton'

export function PlanCard({
  plan,
  color1,
  color2,
  title,
  price,
  decimals,
  description,
  bullets
}) {
  return (
    <div
      className={`box-border mx-full w-[60rem] lg:w-[30rem] h-auto backdrop-blur rounded-2xl text-center bg-gradient-to-b from-[${color1}] to-[${color2}] flex flex-col items-center justify-between select-none text-[#CECECE] p-4 shadow hover:shadow-md shadow-[#959088] hover:shadow-[#959088] transition-all ease-in-out duration-500`}
    >
      <h2 className='text-h4 uppercase mb-2 text-[#FFFFFF] font-headlineFont'>
        {title}
      </h2>
      <p
        className={`text-[0.8em] ${
          title === 'Competitive' || title === '30 sessions'
            ? 'text-[#F5F5F5]'
            : ''
        }`}
      >
        {description}
      </p>
      <h3 className='text-h2 m-2 font-headlineFont text-[#ECECEC]'>
        <span className='font-auxiliarFont'>$</span>
        {price}.<span className='text-[0.5em]'>{decimals || '00'}</span>
        <span className='font-mainFont uppercase text-[0.25em]'>/{plan}</span>
      </h3>
      <ul
        className={`list-disc px-7 text-left text-[0.8em] ${
          title === 'Competitive' ? 'text-[#F1F1F1]' : ''
        }`}
      >
        {bullets?.length &&
          bullets.map((bullet, index) => {
            return <li key={index}>{bullet}</li>
          })}
      </ul>
      <GrayButton content='sign up' />
    </div>
  )
}
