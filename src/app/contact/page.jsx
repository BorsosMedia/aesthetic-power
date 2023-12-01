import bannerMobile from '../../../public/contact/contact-banner-mobile.png'
import banner from '../../../public/contact/contact-banner.jpg'
import location from '../../../public/footer/address-icon.png'
import igIcon from '../../../public/footer/ig-icon.png'
import email from '../../../public/footer/mail-icon.png'
import phone from '../../../public/footer/phone-icon.png'
import tiktokIcon from '../../../public/footer/tiktok-icon.png'
import { Banner } from '../components/Banner/Banner'
import { ExternalLinkContact } from '../components/ExternalLinkContact/ExternalLinkContact'
import styles from './Contact.module.css'
import Image from 'next/image'

export default function Contact() {
  return (
    <main className={`flex flex-col items-center ${styles.mainBackground}`}>
      {/* BANNER MOBILE */}
      <div className='md:hidden'>
        <Banner image={bannerMobile} title='contact me' />
      </div>
      {/* BANNER BIGGER THAN MOBILE */}
      <div className='hidden md:block'>
        <Banner image={banner} title='contact me' />
      </div>

      <article className='px-full md:px-[10vw] py-half md:py-[2.5vw] relative z-10'>
        {/* TITLE AND SUBTITLE */}
        <div
          className={`${styles.overallBackground} absolute h-full w-full top-0 left-0 -z-10`}
        />
        <section className='md:w-[80vw] px-[10%]'>
          <h2 className='uppercase text-h2 font-headlineFont text-center'>
            <span className='text-[#9E0404]'>Let's</span> talk
          </h2>

          <p className='text-h6 mt-5 mb-7 md:mb-10 text-center'>
            Please don't hesitate to reach out if you have further questions.
            <br />
            I'm more than willing to tell you more about myself and what I've
            found.
          </p>
          <div className='mb-14 md:mb-20 w-full h-[0.2rem] bg-gradient-to-r from-[#FF0000] to-[#870000]' />
        </section>

        {/* MAP AND EXTERNAL LINKS */}
        <section className='flex flex-col justify-center items-center gap-5 md:gap-20 mb-10'>
          {/* EXTERNAL LINKS */}
          <section className='flex flex-col w-full pb-2 md:pt-12 md:pb-12 gap-2 md:gap-5 md:text-left'>
            <div className='flex flex-row items-center justify-evenly mb-10'>
              {/* PHONE */}
              <ExternalLinkContact
                image={phone}
                alt='Phone'
                to='tel:+16513289598'
                content='(651) 328 95 98'
              />

              {/* EMAIL */}
              <ExternalLinkContact
                image={email}
                alt='Email'
                to='mailto:henry@aestheticpowercoaching.com'
                content='henry@aestheticpowercoaching.com'
              />
            </div>
            {/* LOCATION */}
            <ExternalLinkContact
              image={location}
              alt='Address'
              to='https://www.google.com/maps/place/Los+Campeones+Gym/@44.9626534,-93.2343362,17z/data=!3m1!4b1!4m6!3m5!1s0x52b32d3060449d95:0xbba3ab008469c856!8m2!3d44.9626534!4d-93.2317613!16s%2Fg%2F1tf_0qvy?hl=es-ES&entry=ttu'
              content={
                <>
                  <span className='uppercase'>Los Campeones Franklin</span>
                  <br />
                  2721 East Franklin Avenue, Minneapolis, MN 55406
                </>
              }
              extraClasses='text-center md:text-left self-center'
            />
          </section>
          {/* MAP */}
          <div
            className={`${styles.mapFrame} w-[30rem] h-[30rem]  md:w-[450px] md:h-[450px] relative`}
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.0659263263624!2d-93.2317613!3d44.9626534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d3060449d95%3A0xbba3ab008469c856!2sLos%20Campeones%20Gym!5e0!3m2!1ses!2sca!4v1689005966880!5m2!1ses!2sca'
              style={{
                border: '0',
                borderRadius: '20px'
              }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='w-[85%] h-[85%] absolute top-[7.5%] left-[7.5%]'
            />
          </div>

          {/* SOCIAL MEDIA LINKS */}
          <div>
            <h3 className='text-h5'>Follow me on social media!</h3>
            <div className='flex flex-row justify-center gap-10 items-center mt-2'>
              <a
                href='https://www.instagram.com/thehenryjohnson'
                target='_blank'
              >
                <Image
                  src={igIcon}
                  alt='Instagram'
                  className='h-[3rem] w-[3rem] hover:scale-125 ease-in-out duration-300'
                />
              </a>
              <a href='https://www.tiktok.com/@thehenryjohnson' target='_blank'>
                <Image
                  src={tiktokIcon}
                  alt='TikTok'
                  className='h-[3rem] w-auto hover:scale-125 ease-in-out duration-300'
                />
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
