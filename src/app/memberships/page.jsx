import bannerMobile from '../../../public/memberships/memberships-banner-mobile.png'
import banner from '../../../public/memberships/memberships-banner.jpg'
import henry from '../../../public/whoIAm/who-i-am.jpg'
import { Banner } from '../components/Banner/Banner'
import { CheckFAQs } from '../components/CheckFAQs/CheckFAQs'
import styles from './Memberships.module.css'
import { Plans } from '@/app/components/Plans/Plans'
import Image from 'next/image'

export default function Memberships() {
  return (
    <main className={`flex flex-col items-center ${styles.mainBackground}`}>
      {/* BANNER MOBILE */}
      <div className='md:hidden'>
        <Banner image={bannerMobile} title='memberships' />
      </div>
      {/* BANNER BIGGER THAN MOBILE */}
      <div className='hidden md:block'>
        <Banner image={banner} title='memberships' right='true' />
      </div>

      <article className='px-full md:px-[10vw] py-half md:py-[2.5vw]'>
        {/* DIFFERENT-PROCESSES SECTION */}
        <section className='flex flex-col items-center justify-center mb-full text-center md:text-left'>
          <h2 className='uppercase font-headlineFont text-h2 mb-full mx-full leading-none'>
            <span className='text-[#9E0404]'>different processes</span>{' '}
            <br className='md:hidden' /> for different goals
          </h2>

          <section className='w-[80vw] flex flex-col md:flex-row justify-evenly md:items-center'>
            <div className='md:w-1/2'>
              <p>
                Building a true working relationship between coach and client is
                the foundation for success, and I'm committed to helping you
                achieve your goals. These aren't your typical training sessions.
                I will teach proper technique and push you to reach new levels
                within your training, and I'll teach you how to eat properly to
                fuel your body.
              </p>
              <p className='my-full'>
                I believe in working hard -- but I also believe in working
                smart. It doesn't matter if you are a first-timer, if you have
                experience or if you are an elite athlete; I will teach you
                everything I know and help you find within yourself the person
                you've always wanted to be.
              </p>
              <div className='flex flex-row justify-evenly md:justify-start items-center'>
                <div className='text-left'>
                  <p>My job starts here. This is what I will do for you:</p>
                  <ul className='list-disc font-bold px-full'>
                    <li>Create Customized Workout Program</li>
                    <li>Provide Exercise Instructions</li>
                    <li>Make Technique Corrections</li>
                    <li>Challenge You to Dig Deeper</li>
                  </ul>
                </div>
                <Image
                  src={henry}
                  alt="Henry's Picture"
                  className='w-[16rem] md:hidden rounded-2xl'
                />
              </div>
            </div>
            <div className='w-[32rem] hidden md:flex flex-row justify-center self-center'>
              <Image
                src={henry}
                alt="Henry's Picture"
                className='rounded-2xl'
              />
            </div>
          </section>
        </section>

        {/* PLANS */}
        <section className='flex flex-col items-center justify-center px-full m-xxl text-center'>
          <section className='flex flex-row justify-stretch items-center w-screen'>
            <div className='w-full h-[0.2rem] bg-gradient-to-r from-[#FF0000] to-[#870000]' />
            <h2 className='uppercase font-headlineFont text-h5 sm:text-h3 md:text-h2 mb-half md:whitespace-nowrap mx-half leading-none'>
              <span className='whitespace-nowrap'>Get valuable training</span>{' '}
              <span className='whitespace-nowrap'>and nutritional tips</span>
            </h2>
            <div className='w-full h-[0.2rem] bg-gradient-to-r from-[#870000] to-[#FF0000]' />
          </section>

          <h3 className='mb-full mx-full text-h6'>
            Customized plans and adjustments to optimize results
          </h3>
          <div className='w-[80vw] text-left'>
            <Plans />
          </div>
        </section>

        {/* *********** CHECK-OUT-Q&A SECTION *********** */}
        <CheckFAQs />
      </article>
    </main>
  )
}
