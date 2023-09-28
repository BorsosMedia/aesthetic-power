import { PlanCard } from '../PlanCard/PlanCard'

export function OnlinePlans({ plan, type }) {
  return (
    <>
      <section
        className={`${
          type !== 'online' ? 'hidden' : ''
        } flex flex-row justify-center items-stretch gap-3 ${
          plan !== 'monthly' ? 'hidden' : ''
        }`}
        name='monthly'
      >
        {/* STANDARD CARD */}
        <PlanCard
          plan='month'
          color1='#666565'
          color2='#1D1D1D'
          title='Standard'
          price='149'
          decimals='99'
          description='Perfect for first-timers and individuals seeking to improve their overall fitness.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord'
          ]}
          to='https://coaching.aestheticpowercoaching.com/ftco-s-1m'
        />

        {/* <div
      className={`box-border w-64 h-96 bg-gradient-to-b from-[#666565] to-[#1D1D1D] backdrop-blur rounded-2xl text-center flex flex-col items-center justify-between select-none text-[#CECECE] text-xs p-5 shadow hover:shadow-md shadow-[#959088] hover:shadow-[#959088] transition-all ease-in-out duration-500`}
    >
      <h2 className='text-4xl uppercase mb-2 text-[#F1F1F1] font-headlineFont'>
        Standard
      </h2>
      <p>Perfect for first-timers and individuals seeking to improve their overall fitness.</p>
      <h3 className='text-5xl m-4 font-headlineFont'>
        <span className='font-auxiliarFont'>$</span>
        149.<span className='text-2xl'>99</span>
        <span className='font-mainFont uppercase text-xs'>/month</span>
      </h3>
      <ul className='list-disc px-7 text-left'>
        <li>Access to all training programs</li>
        <li>Nutrition guidance & education</li>
        <li>Supplementation advice</li>
        <li>Weekly check-ins and updates</li>
        <li>Access to Discord</li>
      </ul>
      <GrayButton content='sign up' />
    </div> */}

        {/* COMPETITIVE CARD */}
        <PlanCard
          plan='month'
          color1='#DDBE1A'
          color2='#211800'
          title='Competitive'
          price='199'
          decimals='99'
          description='Tailored for elite athletes competing in physique and strength-related sports.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord',
            'Contest preparation & guidance'
          ]}
          to='https://coaching.aestheticpowercoaching.com/ftco-c-1m'
        />

        {/* <div
      className={`box-border w-64 h-96 bg-gradient-to-b from-[#DDBE1A] to-[#211800] backdrop-blur rounded-2xl text-center flex flex-col items-center justify-between select-none text-[#CECECE] text-xs p-5 shadow hover:shadow-md shadow-[#959088] hover:shadow-[#959088] transition-all ease-in-out duration-500`}
    >
      <h2 className='text-4xl uppercase mb-2 text-[#F1F1F1] font-headlineFont'>
        Competitive
      </h2>
      <p>Tailored for elite athletes competing in physique and strength-related sports.</p>
      <h3 className='text-5xl m-4 font-headlineFont'>
        <span className='font-auxiliarFont'>$</span>
        199.<span className='text-2xl'>99</span>
        <span className='font-mainFont uppercase text-xs'>/month</span>
      </h3>
      <ul className='list-disc px-7 text-left'>
        <li>Access to all training programs</li>
        <li>Nutrition guidance & education</li>
        <li>Supplementation advice</li>
        <li>Weekly check-ins and updates</li>
        <li>Access to Discord</li>
        <li>Contest preparation & guidance</li>
      </ul>
      <GrayButton content='sign up' />
    </div> */}
      </section>

      <section
        className={`${
          type !== 'online' ? 'hidden' : ''
        } flex flex-row justify-center items-stretch gap-3 ${
          plan !== '3-months' ? 'hidden' : ''
        }`}
        name='3-months'
      >
        {/* STANDARD CARD */}
        <PlanCard
          plan='3 months'
          color1='#666565'
          color2='#1D1D1D'
          title='Standard'
          price='449'
          decimals='97'
          description='Perfect for first-timers and individuals seeking to improve their overall fitness.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord'
          ]}
          to='https://coaching.aestheticpowercoaching.com/ftco-s-3m'
        />

        {/* <div
      className={`box-border w-64 h-96 bg-gradient-to-b from-[#666565] to-[#1D1D1D] backdrop-blur rounded-2xl text-center flex flex-col items-center justify-between select-none text-[#CECECE] text-xs p-5 shadow hover:shadow-md shadow-[#959088] hover:shadow-[#959088] transition-all ease-in-out duration-500`}
    >
      <h2 className='text-4xl uppercase mb-2 text-[#F1F1F1] font-headlineFont'>
        Standard
      </h2>
      <p>Perfect for first-timers and individuals seeking to improve their overall fitness.</p>
      <h3 className='text-5xl m-4 font-headlineFont'>
        <span className='font-auxiliarFont'>$</span>
        449.<span className='text-2xl'>97</span>
        <span className='font-mainFont uppercase text-xs'>/3 months</span>
      </h3>
      <ul className='list-disc px-7 text-left'>
        <li>Access to all training programs</li>
        <li>Nutrition guidance & education</li>
        <li>Supplementation advice</li>
        <li>Weekly check-ins and updates</li>
        <li>Access to Discord</li>
      </ul>
      <GrayButton content='sign up' />
    </div> */}

        {/* COMPETITIVE CARD */}
        <PlanCard
          plan='3 months'
          color1='#DDBE1A'
          color2='#211800'
          title='Competitive'
          price='599'
          decimals='97'
          description='Tailored for elite athletes competing in physique and strength-related sports.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord',
            'Contest preparation & guidance'
          ]}
          to='https://coaching.aestheticpowercoaching.com/ftco-c-3m'
        />

        {/* <div
      className={`box-border w-64 h-96 bg-gradient-to-b from-[#DDBE1A] to-[#211800] backdrop-blur rounded-2xl text-center flex flex-col items-center justify-between select-none text-[#CECECE] text-xs p-5 shadow hover:shadow-md shadow-[#959088] hover:shadow-[#959088] transition-all ease-in-out duration-500`}
    >
      <h2 className='text-4xl uppercase mb-2 text-[#F1F1F1] font-headlineFont'>
        Competitive
      </h2>
      <p>Tailored for elite athletes competing in physique and strength-related sports.</p>
      <h3 className='text-5xl m-4 font-headlineFont'>
        <span className='font-auxiliarFont'>$</span>
        599.<span className='text-2xl'>97</span>
        <span className='font-mainFont uppercase text-xs'>/3 months</span>
      </h3>
      <ul className='list-disc px-7 text-left'>
        <li>Access to all training programs</li>
        <li>Nutrition guidance & education</li>
        <li>Supplementation advice</li>
        <li>Weekly check-ins and updates</li>
        <li>Access to Discord</li>
        <li>Contest preparation & guidance</li>
      </ul>
      <GrayButton content='sign up' />
    </div> */}
      </section>

      <section
        className={`${
          type !== 'online' ? 'hidden' : ''
        } flex flex-row justify-center items-stretch gap-3 ${
          plan !== '6-months' ? 'hidden' : ''
        }`}
        name='6-months'
      >
        {/* STANDARD CARD */}
        <PlanCard
          plan='6 months'
          color1='#666565'
          color2='#1D1D1D'
          title='Standard'
          price='824'
          decimals='94'
          description='Perfect for first-timers and individuals seeking to improve their overall fitness.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord'
          ]}
          to='https://coaching.aestheticpowercoaching.com/ftco-s-6m'
        />

        {/* <div
      className={`box-border w-64 h-96 bg-gradient-to-b from-[#666565] to-[#1D1D1D] backdrop-blur rounded-2xl text-center flex flex-col items-center justify-between select-none text-[#CECECE] text-xs p-5 shadow hover:shadow-md shadow-[#959088] hover:shadow-[#959088] transition-all ease-in-out duration-500`}
    >
      <h2 className='text-4xl uppercase mb-2 text-[#F1F1F1] font-headlineFont'>
        Standard
      </h2>
      <p>Perfect for first-timers and individuals seeking to improve their overall fitness.</p>
      <h3 className='text-5xl m-4 font-headlineFont'>
        <span className='font-auxiliarFont'>$</span>
        824.<span className='text-2xl'>94</span>
        <span className='font-mainFont uppercase text-xs'>/6 months</span>
      </h3>
      <ul className='list-disc px-7 text-left'>
        <li>Access to all training programs</li>
        <li>Nutrition guidance & education</li>
        <li>Supplementation advice</li>
        <li>Weekly check-ins and updates</li>
        <li>Access to Discord</li>
      </ul>
      <GrayButton content='sign up' />
    </div> */}

        {/* COMPETITIVE CARD */}
        <PlanCard
          plan='6 months'
          color1='#DDBE1A'
          color2='#211800'
          title='Competitive'
          price='1099'
          decimals='94'
          description='Tailored for elite athletes competing in physique and strength-related sports.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord',
            'Contest preparation & guidance'
          ]}
          to='https://coaching.aestheticpowercoaching.com/ftco-c-6m'
        />

        {/* <div
      className={`box-border w-64 h-96 bg-gradient-to-b from-[#DDBE1A] to-[#211800] backdrop-blur rounded-2xl text-center flex flex-col items-center justify-between select-none text-[#CECECE] text-xs p-5 shadow hover:shadow-md shadow-[#959088] hover:shadow-[#959088] transition-all ease-in-out duration-500`}
    >
      <h2 className='text-4xl uppercase mb-2 text-[#F1F1F1] font-headlineFont'>
        Competitive
      </h2>
      <p>Tailored for elite athletes competing in physique and strength-related sports.</p>
      <h3 className='text-5xl m-4 font-headlineFont'>
        <span className='font-auxiliarFont'>$</span>
        1099.<span className='text-2xl'>94</span>
        <span className='font-mainFont uppercase text-xs'>/6 months</span>
      </h3>
      <ul className='list-disc px-7 text-left'>
        <li>Access to all training programs</li>
        <li>Nutrition guidance & education</li>
        <li>Supplementation advice</li>
        <li>Weekly check-ins and updates</li>
        <li>Access to Discord</li>
        <li>Contest preparation & guidance</li>
      </ul>
      <GrayButton content='sign up' />
    </div> */}
      </section>

      <section
        className={`${
          type !== 'online' ? 'hidden' : ''
        } flex flex-row justify-center items-stretch gap-3 ${
          plan !== 'annual' ? 'hidden' : ''
        }`}
        name='annual'
      >
        {/* STANDARD CARD */}
        <PlanCard
          plan='year'
          color1='#666565'
          color2='#1D1D1D'
          title='Standard'
          price='1649'
          decimals='89'
          description='Perfect for first-timers and individuals seeking to improve their overall fitness.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord'
          ]}
          to='https://coaching.aestheticpowercoaching.com/ftco-s-a'
        />

        {/* <div
      className={`box-border w-64 h-96 bg-gradient-to-b from-[#666565] to-[#1D1D1D] backdrop-blur rounded-2xl text-center flex flex-col items-center justify-between select-none text-[#CECECE] text-xs p-5 shadow hover:shadow-md shadow-[#959088] hover:shadow-[#959088] transition-all ease-in-out duration-500`}
    >
      <h2 className='text-4xl uppercase mb-2 text-[#F1F1F1] font-headlineFont'>
        Standard
      </h2>
      <p>Perfect for first-timers and individuals seeking to improve their overall fitness.</p>
      <h3 className='text-5xl m-4 font-headlineFont'>
        <span className='font-auxiliarFont'>$</span>
        1649.<span className='text-2xl'>89</span>
        <span className='font-mainFont uppercase text-xs'>/year</span>
      </h3>
      <ul className='list-disc px-7 text-left'>
        <li>Access to all training programs</li>
        <li>Nutrition guidance & education</li>
        <li>Supplementation advice</li>
        <li>Weekly check-ins and updates</li>
        <li>Access to Discord</li>
      </ul>
      <GrayButton content='sign up' />
    </div> */}

        {/* COMPETITIVE CARD */}
        <PlanCard
          plan='year'
          color1='#DDBE1A'
          color2='#211800'
          title='Competitive'
          price='2199'
          decimals='89'
          description='Tailored for elite athletes competing in physique and strength-related sports.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord',
            'Contest preparation & guidance'
          ]}
          to='https://coaching.aestheticpowercoaching.com/ftco-c-a'
        />

        {/* <div
      className={`box-border w-64 h-96 bg-gradient-to-b from-[#DDBE1A] to-[#211800] backdrop-blur rounded-2xl text-center flex flex-col items-center justify-between select-none text-[#CECECE] text-xs p-5 shadow hover:shadow-md shadow-[#959088] hover:shadow-[#959088] transition-all ease-in-out duration-500`}
    >
      <h2 className='text-4xl uppercase mb-2 text-[#F1F1F1] font-headlineFont'>
        Competitive
      </h2>
      <p>Tailored for elite athletes competing in physique and strength-related sports.</p>
      <h3 className='text-5xl m-4 font-headlineFont'>
        <span className='font-auxiliarFont'>$</span>
        2199.<span className='text-2xl'>89</span>
        <span className='font-mainFont uppercase text-xs'>/year</span>
      </h3>
      <ul className='list-disc px-7 text-left'>
        <li>Access to all training programs</li>
        <li>Nutrition guidance & education</li>
        <li>Supplementation advice</li>
        <li>Weekly check-ins and updates</li>
        <li>Access to Discord</li>
        <li>Contest preparation & guidance</li>
      </ul>
      <GrayButton content='sign up' />
    </div> */}
      </section>
    </>
  )
}
