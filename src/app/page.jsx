'use client'

import alex from '../../public/home/alex.png'
import athlete from '../../public/home/athlete.png'
// import product1 from '../../public/store/product-1.png'
// import product2 from '../../public/store/product-2.png'
// import product3 from '../../public/store/product-3.png'
// import product4 from '../../public/store/product-4.png'
// import product5 from '../../public/store/product-5.png'
// import product6 from '../../public/store/product-6.png'
// import product7 from '../../public/store/product-7.png'
// import product8 from '../../public/store/product-8.png'
import blackMetalShirt1 from '../../public/home/blackMetalShirt1.png'
import bodybuilder from '../../public/home/bodybuilder.png'
import eliot from '../../public/home/eliot.png'
import firstTimer from '../../public/home/first-timer.png'
import banner from '../../public/home/home-banner.png'
import henryJourney from '../../public/home/journey-henry.png'
import kevin from '../../public/home/kevin.png'
import kyle from '../../public/home/kyle.png'
import peyton from '../../public/home/peyton.png'
import senior from '../../public/home/senior.png'
import teen from '../../public/home/teen.png'
import styles from './Home.module.css'
import { CarouselProducts } from './components/CarouselProducts/CarouselProducts'
import { CheckFAQs } from './components/CheckFAQs/CheckFAQs'
import { Plans } from './components/Plans/Plans'
import { SwiperTargets } from './components/SwiperTargets/SwiperTargets'
import { Target } from './components/Target/Target'
import { Testimonials } from './components/Testimonials/Testimonials'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* ********************************************************* BANNER *********************************************************** */}
      <article className='relative text-center'>
        <Image src={banner} alt='Home Banner' className='bg-cover' />
        <div className='text-h5 md:text-banner font-headlineFont w-full h-full absolute top-0 left-0 flex flex-row justify-start items-center px-xxxl md:px-[10vw] py-half md:py-[2.5vw]'>
          <h1 className='leading-none text-left'>Find The Pain</h1>
        </div>
      </article>

      {/* ********************************************************* TARGETS *********************************************************** */}
      <article
        className={`flex flex-col items-center justify-center px-full md:px-[10vw] pt-half ${styles.mainBackground}`}
      >
        <section className='flex flex-col items-center'>
          <h2 className='uppercase mb-5 lg:w-4/5 text-h5 sm:text-h3 md:text-h2 font-headlineFont text-center leading-none'>
            I Help People Make a Real Change in Their Lives <br />
            <span className='text-[#9E0404]'>
              Through Nutrition and Strength Training
            </span>
          </h2>
          {/* MOBILE VERSION */}
          <section className='mx-[10vw] w-[80vw] targets:hidden'>
            <SwiperTargets />
          </section>
          {/* LAPTOP VERSION */}
          <section className='hidden targets:flex flex-row justify-evenly flex-nowrap gap-3'>
            <Target
              name='First-timers'
              image={firstTimer}
              flip='true'
              title={
                <>
                  First<span className='font-auxiliarFont'>-</span>Timers
                </>
              }
              content={
                <>
                  No experience? <br /> No problem
                </>
              }
            />
            <Target
              name='Seniors'
              image={senior}
              flip='true'
              title='Seniors'
              content='Age is not a limit'
            />
            <Target
              name='Teens'
              image={teen}
              flip='true'
              title='Teens'
              content={
                <>
                  Important early <br /> development
                </>
              }
            />
            <Target
              name='Experienced Athletes'
              image={athlete}
              title={
                <>
                  Experienced <br /> Athletes
                </>
              }
              content='Reach that next level'
            />
            <Target
              name='Bodybuilders'
              image={bodybuilder}
              title='Bodybuilders'
              content='Prepare for competition'
            />
          </section>
        </section>

        {/* ********************************************************* PLANS *********************************************************** */}

        <section className='flex flex-col items-center w-[80vw] mb-10'>
          <section className='flex flex-col items-center mt-xl'>
            <h2 className='uppercase mt-20 mb-5 text-h5 sm:text-h3 md:text-h2 font-headlineFont text-center leading-none'>
              Where the Mind Goes, <br className='md:hidden' /> the Body Will
              Follow
            </h2>
            <div className='w-4/5 h-[0.2rem] bg-gradient-to-r from-[#FF0000] to-[#870000]' />
          </section>
          <section className=' py-10 text-center lg:w-4/6 mb-half'>
            <p>
              The harsh truth of fitness that nobody wants to admit is that it's
              centered in the mind. Everyone knows how to get in shape, and
              nobody is in shape. I was no different - I had all the knowledge
              and resources available to me, and still wasn't using them.
            </p>
            <p className='py-5'>
              The “secret” everybody is looking for is this: I first had to
              change the way I think before I was able to change the way I
              looked.
            </p>
            <p>
              I'm here to help you elevate your lifestyle so you can UNLEASH
              your full potential.
            </p>
          </section>
          <Plans />
          <CheckFAQs />
        </section>

        {/* ********************************************************* MY JOURNEY *********************************************************** */}

        <section
          className={`w-screen ${styles.journeyBackground} flex flex-row-reverse md:flex-row justify-center items-center gap-3 px-full pt-full`}
        >
          <Image
            src={henryJourney}
            alt="Henry's picture"
            className='h-auto w-[50%] md:w-[25%]'
          />
          <section className='font-headlineFont flex flex-col justify-center items-start'>
            <h2 className='text-h5 sm:text-h3 md:text-h2'>
              I am Henry Johnson
            </h2>
            <p className='font-mainFont py-2 my-4 leading-none text-[0.8em] md:text-[1em]'>
              Learn how I transformed my lifestyle through training
            </p>
            <button className='uppercase text-[#333333] bg-gradient-to-b from-[#F1F1F1] to-[#C7C7C7] py-1 px-2 md:px-5 sm:my-5 mx-2 hover:cursor-pointer hover:scale-105 active:scale-95 transition-all ease-in-out duration-300 rounded-sm text-h6 md:text-h5'>
              <Link href='/about'>Learn about my journey</Link>
            </button>
          </section>
        </section>

        {/* ********************************************************* MY CLIENTS *********************************************************** */}

        <section className='flex flex-col items-center justify-center px-5 my-5 md:m-20 text-center w-screen'>
          <section className='flex flex-row justify-stretch items-center w-screen'>
            <div className='w-full h-[0.2rem] bg-gradient-to-r from-[#FF0000] to-[#870000]' />
            <h2 className='uppercase font-headlineFont text-h5 sm:text-h3 md:text-h2 mb-2 md:whitespace-nowrap mx-half leading-none'>
              <span className='whitespace-nowrap'>My clients tell</span>{' '}
              <span className='whitespace-nowrap'>their stories</span>
            </h2>
            <div className='w-full h-[0.2rem] bg-gradient-to-r from-[#870000] to-[#FF0000]' />
          </section>

          <h3 className='mb-5 px-full'>
            Learn how I've helped my clients during their processes.
          </h3>

          <section className='flex flex-row w-[80%] py-5'>
            <Testimonials
              testimonials={[
                {
                  image: peyton,
                  name: 'Peyton Samek',
                  testimony: `“Henry has been awesome to work with, he genuinely wants you to succeed in all aspects of life. When I first started working with him I was unmotivated, all talk no action, and undisciplined. Once I started to put more effort in, I then started to receive the benefits of his coaching. That being said, you won't get anything out of his coaching/nutrition if you don't check in, follow the plan, and tell him when you go off program. Anyone who knew me growing up knows that bodybuilding was the complete opposite of my lazy personality, but with hard work and discipline, Henry guided me to the end goal and helped me lose ~50 pounds in 4 months of prep. I'm excited to further surpass my own expectations and see what possibilities I can achieve with Henry as my coach!”`
                },
                {
                  image: eliot,
                  name: 'Eliot Wood',
                  testimony: `"I've been working with Henry as my bodybuilding coach for a little over a year now and I can't recommend his services enough. He has helped me completely change my physique from looking like a slightly chubby gym bro to an actual competitive level bodybuilder. Henry's knowledge of nutrition, training and supplementation is incredible and has totally altered the way I look at food and training. He keeps things simple and the only thing that is required from me is adherence and trust. No matter where you are at in your journey for physical betterment, Henry Johnson can and will help you reach your goals and surpass your own expectations of what you're capable of. I'm ever so excited to continue my bodybuilding career with Henry as my coach. I am proud to have him as a coach - and even more proud to have him as a friend."`
                },
                {
                  image: kyle,
                  name: 'Kyle Solis',
                  testimony: `“Working with Henry has been incredible. He goes above and beyond for his clients, you're not just another paycheck! Henry pushes you beyond what you thought you were capable of. He genuinely cares for who he works with as people; pushing them to achieve whatever goals they may have!”`
                },
                {
                  image: kevin,
                  name: 'Kevin Blaine',
                  testimony: `“As an older man with a sedentary lifestyle, I wanted to improve my fitness through weight training. I hired Henry for what was supposed to be a one week course. I have now been using his service for several years. Henry is affable and extremely knowledgeable on how the muscle groups work. A one week trial turned into a very positive life changing event. I owe Henry and his knowledge and professionalism for that.”`
                },
                {
                  image: alex,
                  name: 'Alex Pelagalli',
                  testimony: `“Working with Henry has been the best way for me to stay motivated on the tougher days, work harder on my workouts, and learn how to make gains faster.”`
                }
              ]}
            />
          </section>
        </section>

        {/* ********************************************************* CHECK-OUT STORE *********************************************************** */}
        {/* CHANGE HIDDEN TO FLEX TO SHOW SECTION */}
        <section
          className={`hidden flex-col items-center w-screen py-10 ${styles.storeBackground}`}
        >
          <h2 className='text-h5 sm:text-h4 md:text-h3'>Check Out My Store!</h2>
          <section className='flex flex-row w-[80%] py-5'>
            <CarouselProducts
              products={[
                {
                  image: blackMetalShirt1,
                  description: 'Aesthetic Power Black Metal Style',
                  price: '25'
                },
                {
                  image: blackMetalShirt1,
                  description: 'Aesthetic Power Black Metal Style',
                  price: '25'
                },
                {
                  image: blackMetalShirt1,
                  description: 'Aesthetic Power Black Metal Style',
                  price: '25'
                },
                {
                  image: blackMetalShirt1,
                  description: 'Aesthetic Power Black Metal Style',
                  price: '25'
                },
                {
                  image: blackMetalShirt1,
                  description: 'Aesthetic Power Black Metal Style',
                  price: '25'
                },
                {
                  image: blackMetalShirt1,
                  description: 'Aesthetic Power Black Metal Style',
                  price: '25'
                },
                {
                  image: blackMetalShirt1,
                  description: 'Aesthetic Power Black Metal Style',
                  price: '25'
                },
                {
                  image: blackMetalShirt1,
                  description: 'Aesthetic Power Black Metal Style',
                  price: '25'
                }
              ]}
            />
            {/* <CarouselProducts
              products={[
                {
                  image: product1,
                  description: 'Lorem Ipsum Lorem Ipsum',
                  price: '20'
                },
                {
                  image: product2,
                  description: 'Lorem Ipsum Lorem Ipsum',
                  price: '20'
                },
                {
                  image: product3,
                  description: 'Lorem Ipsum Lorem Ipsum',
                  price: '20'
                },
                {
                  image: product4,
                  description: 'Lorem Ipsum Lorem Ipsum',
                  price: '20'
                },
                {
                  image: product5,
                  description: 'Lorem Ipsum Lorem Ipsum',
                  price: '20'
                },
                {
                  image: product6,
                  description: 'Lorem Ipsum Lorem Ipsum',
                  price: '20'
                },
                {
                  image: product7,
                  description: 'Lorem Ipsum Lorem Ipsum',
                  price: '20'
                },
                {
                  image: product8,
                  description: 'Lorem Ipsum Lorem Ipsum',
                  price: '20'
                }
              ]}
            /> */}
          </section>
          <button className='uppercase font-headlineFont text-[#333333] bg-gradient-to-b from-[#F1F1F1] to-[#C7C7C7] py-1 px-5 my-5 mx-2 hover:cursor-pointer hover:scale-105 active:scale-95 transition-all ease-in-out duration-300 rounded-sm'>
            <Link href='/store'>See More</Link>
          </button>
        </section>

        {/* ********************************************************* SOCIAL MEDIA EMBEDS *********************************************************** */}

        <section className='w-screen relative pb-[10vh] z-10'>
          <h2 className='text-h5 sm:text-h3 md:text-h2 text-center font-headlineFont py-10'>
            follow me on social media
          </h2>
          <section
            className='flex flex-col-reverse md:flex-row
          justify-center items-center gap-[5rem] px-[10%] w-full'
          >
            {/* TIKTOK */}
            <div
              className='elfsight-app-60ecd802-a7ed-4445-8fd1-785bc9d08090'
              style={{
                width: '100%'
              }}
            />

            {/* SEPARATORS */}
            <div className='hidden w-[0.4rem] md:block self-stretch bg-gradient-to-r from-[#FF0000] to-[#870000] mt-1 mb-2' />
            <div className='h-[0.4rem] md:hidden self-stretch bg-gradient-to-r from-[#FF0000] to-[#870000] mt-1 mb-2' />

            {/* INSTAGRAM */}
            <div className='elfsight-app-1e805dc6-246c-48db-89b4-ce750f4149e5' />
          </section>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#440E0E]/[0] to-[#E90000]/[0.15] object-fit block -z-10' />
        </section>
      </article>
    </main>
  )
}
