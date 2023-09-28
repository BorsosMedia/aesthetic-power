import bannerMobile from '../../../public/about/about-banner-mobile.png'
import banner from '../../../public/about/about-banner.jpg'
import journey2 from '../../../public/home/part-journey-body.jpg'
import journey1 from '../../../public/home/part-journey-mind.jpg'
import henry from '../../../public/whoIAm/who-i-am.jpg'
import { Banner } from '../components/Banner/Banner'
import { RedButton } from '../components/RedButton/RedButton'
import { WhoIAm } from '../components/WhoIAm/WhoIAm'
import styles from './About.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <main className={`flex flex-col items-center ${styles.mainBackground}`}>
      {/* BANNERS */}
      <article>
        {/* mobile */}
        <div className='md:hidden'>
          <Banner image={bannerMobile} title='About Me' right='true' />
        </div>
        {/* bigger than mobile */}
        <div className='hidden md:block'>
          <Banner image={banner} title='About Me' right='true' />
        </div>
      </article>

      {/* MAIN SECTION */}
      <article className='px-full md:px-[10vw] py-half md:py-[2.5vw]'>
        {/* who I am */}
        <WhoIAm />
        {/* 3 images */}
        <section className='hidden md:flex flex-row justify-evenly items-center gap-3 my-10'>
          <div>
            <Image
              src={journey1}
              alt='journey 1'
              className='w-[15em] rounded-[2rem]'
            />
          </div>
          <div>
            <Image
              src={journey2}
              alt='journey 2'
              className='w-[15em] rounded-[2rem]'
            />
          </div>
          <div>
            <Image
              src={journey1}
              alt='journey 3'
              className='-scale-x-100 w-[15em] rounded-[2rem]'
            />
          </div>
        </section>

        {/* my purpose as a coach */}
        <section className='flex flex-col md:flex-row justify-evenly md:items-center gap-10 px-5 my-5 md:m-20 text-center md:text-left'>
          <article className='w-80 md:w-[50%] flex flex-row justify-center self-center'>
            <Image
              src={henry}
              alt="Henry's Picture"
              className='rounded-2xl w-4/5 lg:w-3/5'
            />
          </article>
          <article className='w-full md:w-[50%]'>
            <h2 className='uppercase text-h2 mb-5 font-headlineFont leading-none'>
              my purpose as a coach
            </h2>
            <p>
              There is a lot of bullshit in the fitness industry, so my approach
              is different.{' '}
              <span className='font-black'>
                Everything we do has a purpose.
              </span>{' '}
              We know what works, and I am not interested in wasting time on
              anything that doesn't.
            </p>
            <p className='my-4'>
              My job as your coach is not just to tell you what exercises to
              perform or show you how to eat with purpose --{' '}
              <span className='font-black'>
                I will do whatever it takes to help you embody the version of
                yourself that nobody else but you knows is in there.
              </span>{' '}
              You know who I'm talking about.
            </p>
            <RedButton content='memberships' link='/memberships' />
          </article>
        </section>
      </article>
    </main>
  )
}
