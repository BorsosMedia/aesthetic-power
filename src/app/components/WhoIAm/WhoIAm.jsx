import henry from '../../../../public/whoIAm/who-i-am.jpg'
import Image from 'next/image'

export function WhoIAm() {
  return (
    <article className='flex flex-col md:flex-row justify-evenly md:items-center gap-10 px-full py-half lg:px-xxl lg:py-xl text-center md:text-left'>
      <section className='w-full lg:w-[50%]'>
        <h2 className='uppercase text-h2 mb-half font-headlineFont leading-none'>
          How Did My Journey Begin?
        </h2>
        <p>
          <span className='font-black'>
            Never in a million years did I think I'd wind up being a lifter.
          </span>{' '}
          Growing up, I figured that lifting weights, growing muscles, and
          getting stronger were for “other people,” not people like me.
        </p>
        <p className='my-half'>
          I spent years being afraid of going to the gym because I didn't know
          how, and I kick myself every day for it because I found something here
          I've never had before.
        </p>
        <p>
          If you're in the same boat and don't know how to get started, feel
          free to message me.{' '}
          <span className='font-black'>
            I work with clients of all ages and experience levels, and I'd love
            to be a part of your journey.
          </span>
        </p>
        <div className='w-full mt-10 flex flex-row justify-center items-center lg:hidden'>
          <Image
            src={henry}
            alt="Henry's Picture"
            className='rounded-2xl w-[24rem] md:w-[50%]'
          />
        </div>
        <div>
          <h2 className='uppercase text-h2 mb-half font-headlineFont mt-full leading-none'>
            How I Turned My Life Around
          </h2>
          <p>
            It's hard to admit you have alcohol and drug problems. I felt lost
            for years, but in fitness I discovered something that I'm passionate
            about. I've been sober since 2015 and working out has helped me turn
            my life around. I'm living proof it can be done,{' '}
            <span className='font-black'>
              so I'm ready to help others do the same.
            </span>
          </p>
        </div>
      </section>
      <section className='w-[50%] hidden lg:flex flex-row justify-center self-center'>
        <Image
          src={henry}
          alt="Henry's Picture"
          className='rounded-2xl w-full'
        />
      </section>
    </article>
  )
}
