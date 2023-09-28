import { PlanCard } from '../PlanCard/PlanCard'

export function InPersonPlans({ type }) {
  return (
    <>
      <section
        className={`${
          type !== 'in-person' ? 'hidden' : ''
        } flex flex-row justify-center items-stretch gap-3 mt-full`}
      >
        <PlanCard
          plan='10 sessions'
          color1='#666565'
          color2='#1D1D1D'
          title='10 sessions'
          price='699'
          decimals='99'
          description='Perfect for first-timers and individuals seeking to improve their overall fitness.'
          bullets={[
            'Ten one-hour training sessions in person with me',
            'Clients training with me 2 or more times a week will get the online coaching package included'
          ]}
        />

        {/* <div
      className={`box-border w-64 h-96 bg-gradient-to-b from-[#666565] to-[#1D1D1D] backdrop-blur rounded-2xl text-center flex flex-col items-center justify-between select-none text-[#CECECE] text-xs p-5 shadow hover:shadow-md shadow-[#959088] hover:shadow-[#959088] transition-all ease-in-out duration-500`}
    >
      <h2 className='text-4xl uppercase mb-2 text-[#F1F1F1] font-headlineFont'>
        10 sessions
      </h2>
      <p>Perfect for first-timers and individuals seeking to improve their overall fitness.</p>
      <h3 className='text-5xl m-4 font-headlineFont'>
        <span className='font-auxiliarFont'>$</span>
        699.<span className='text-2xl'>99</span>
        <span className='font-mainFont uppercase text-xs'>/10 sessions</span>
      </h3>
      <ul className='list-disc px-7 text-left'>
        <li>Ten one-hour training sessions in person with me</li>
        <li>Clients training with me 2 or more times a week will get the online coaching package included</li>
      </ul>
      <GrayButton content='sign up' />
    </div> */}

        <PlanCard
          plan='30 sessions'
          color1='#A90000'
          color2='#3F0000'
          title='30 sessions'
          price='1749'
          decimals='97'
          description='Tailored for elite athletes competing in physique and strength-related sports.'
          bullets={[
            'Thirty one-hour training sessions in person with me',
            'Clients training with me 2 or more times a week will get the online coaching package included'
          ]}
        />

        {/* <div
      className={`box-border w-64 h-96 bg-gradient-to-b from-[#A90000] to-[#3F0000] backdrop-blur rounded-2xl text-center flex flex-col items-center justify-between select-none text-[#CECECE] text-xs p-5 shadow hover:shadow-md shadow-[#959088] hover:shadow-[#959088] transition-all ease-in-out duration-500`}
    >
      <h2 className='text-4xl uppercase mb-2 text-[#F1F1F1] font-headlineFont'>
        30 sessions
      </h2>
      <p>Tailored for elite athletes competing in physique and strength-related sports.</p>
      <h3 className='text-5xl m-4 font-headlineFont'>
        <span className='font-auxiliarFont'>$</span>
        1749.<span className='text-2xl'>97</span>
        <span className='font-mainFont uppercase text-xs'>/30 sessions</span>
      </h3>
      <ul className='list-disc px-7 text-left'>
        <li>Thirty one-hour training sessions in person with me</li>
        <li>Clients training with me 2 or more times a week will get the online coaching package included</li>
      </ul>
      <GrayButton content='sign up' />
    </div> */}
      </section>
    </>
  )
}
