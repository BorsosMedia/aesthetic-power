import { GrayButton } from '../GrayButton/GrayButton'

export function PlanCardMobile({
  plan,
  color1,
  color2,
  title,
  price,
  decimals,
  description,
  bullets,
  to
}) {
  return (
    <section
      className={`box-border w-[80vw] h-[28rem] bg-gradient-to-b from-[${color1}] to-[${color2}] backdrop-blur rounded text-left flex flex-row items-around justify-center select-none text-[#CECECE] p-full my-half shadow hover:shadow-md shadow-[#959088] hover:shadow-[#959088] transition-all ease-in-out duration-500`}
    >
      <div className='flex flex-col items-start justify-around w-1/2'>
        <h2 className='uppercase text-h4 mb-half font-headlineFont text-[#FFFFFF]'>
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
        <h3 className='text-[2.3em] font-headlineFont text-[#ECECEC]'>
          <span className='font-auxiliarFont'>$</span>
          {price}.<span className='text-[0.5em]'>{decimals || '00'}</span>
          <span className='font-mainFont text-[0.25em] uppercase'>/{plan}</span>
        </h3>
        <GrayButton content='sign up' to={to} />
      </div>
      <div className='flex flex-col items-end justify-around w-1/2'>
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
      </div>
    </section>
  )
}
