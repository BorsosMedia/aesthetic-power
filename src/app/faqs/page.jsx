'use client'

import bannerMobile from '../../../public/faqs/faqs-banner-mobile.png'
import banner from '../../../public/faqs/faqs-banner.png'
import { AskedQuestion } from '../components/AskedQuestion/AskedQuestion'
import { Banner } from '../components/Banner/Banner'
import { RedButton } from '../components/RedButton/RedButton'
import styles from './FAQs.module.css'
import { Box } from '@mui/material'

export default function FAQs() {
  return (
    <main
      className={`flex flex-col items-center text-[#F1F1F1] ${styles.mainBackground}`}
    >
      {/* BANNER MOBILE */}
      <div className='md:hidden'>
        <Banner
          image={bannerMobile}
          title={
            <>
              Q
              <span className='font-auxiliarFont text-3xl md:text-6xl lg:text-7xl'>
                &
              </span>
              A Section
            </>
          }
        />
      </div>
      {/* BANNER BIGGER THAN MOBILE */}
      <div className='hidden md:block'>
        <Banner image={banner} title='FAQ section' />
      </div>

      <article className='px-full md:px-[10vw] py-half md:py-[2.5vw]'>
        {/* TITLE AND SUBTITLE */}
        <section>
          <h2 className='uppercase text-h2 font-headlineFont text-center'>
            <span className='text-[#9E0404]'>No bull,</span> no excuses
          </h2>

          <p className='mt-5 mb-10 md:mb-20 text-center mx-[10vw] sm:text-h6'>
            There's a lot of conflicting information online. I like to get to
            the point, so let me answer some of the most frequently asked
            questions. Feel free to get in touch if you have something else in
            mind.
          </p>
        </section>

        {/* FAQs ACCORDION */}
        <Box className='md:mx-[5vw]'>
          <AskedQuestion
            question='1. Why should I hire a personal trainer?'
            answer="I can't speak for everyone -- but in my experience, my ideal client is simply somebody with a desire for progression. If the client isn't “looking for something” or interested in self improvement, they oftentimes will have a tough time adhering to a proper training routine or following nutrition guidelines. Please don't misinterpret that - I love working with and helping people who haven't quite put all the pieces together yet and want to learn how to do so. It is that “wanting” that is the crucial piece. I cannot make anyone do anything - they must want to do it themselves."
          />

          <AskedQuestion
            question='2. Will you put me on a diet?'
            answer="I will not, nor am I legally qualified to do so in most states. I do, however, have quite a bit of specialized knowledge and experience on the topic of performance nutrition, and I'm more than willing to provide guidelines and suggestions to anyone looking to improve their eating habits or performance in the gym.
            "
          />

          <AskedQuestion
            question="3. What if I've never been to the gym before?"
            answer="Great - that's fantastic. I didn't set foot in a gym under my own free will until I was 20 years old, and I was mortified to do so. I have been kicking myself ever since for not doing it sooner. I love working with people brand new to the scene, especially if I can help them cut through some of the B.S. plaguing the fitness industry and avoid making some of the mistakes I made.
            "
          />

          <AskedQuestion
            question=' 4. Will working out improve my mental health?'
            answer='I have absolutely no way of knowing that, nor am I qualified to answer it for you. However, I am qualified to speak on my own experience, and my experience has been that the gym has given me more than I ever could have imagined, including a place where I could go and “win,” no matter what the rest of my life looked like at the time. My life used to be pretty horrible, and the gym has been a constant for me throughout my metaphorical rebirth.'
          />

          <AskedQuestion
            question='5. Do I need to take supplements?'
            answer='Absolutely not. Supplementation is completely optional and oftentimes unnecessary for individuals not already nailing the basics of nutrition, training, and recovery. However, for those who wish to use supplements, I am more than willing to provide education on the topic & help you avoid lighting money on fire the way I did at the beginning.'
          />
        </Box>

        {/* CONTACT-ME SECTION */}
        <section className='flex flex-col justify-center items-center px-5 text-center mt-10 md:mt-20'>
          <h3 className='text-h6'>Do you have more questions?</h3>
          <RedButton content='contact me' link='/contact' />
        </section>
      </article>
    </main>
  )
}
