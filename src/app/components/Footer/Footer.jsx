'use client'

import location from '../../../../public/footer/address-icon.png'
import logo from '../../../../public/footer/aesthetic-power-footer.png'
import igIcon from '../../../../public/footer/ig-icon.png'
import email from '../../../../public/footer/mail-icon.png'
import phone from '../../../../public/footer/phone-icon.png'
import tiktokIcon from '../../../../public/footer/tiktok-icon.png'
import { ExternalLinkFooter } from '../ExternalLinkFooter/ExternalLinkFooter'
import styles from './Footer.module.css'
import { useWindowDimensions } from '@/app/hooks/useWindowDimensions'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Footer() {
  const pathname = usePathname()
  const selected = 'text-[#F1F1F1] font-black'

  const { width } = useWindowDimensions()

  return (
    <footer className={`${styles.footer} w-full px-5`}>
      <article className='flex flex-col lg:flex-row items-center lg:items-stretch justify-center text-[#C7C7C7]'>
        {/* LEFT SECTION */}
        <section className='flex flex-row lg:basis-1/3 justify-end gap-[5rem]'>
          {/* ******** COMPANY DETAILS ******** */}
          <section className='flex flex-col items-center py-2 lg:py-10 gap-3 lg:text-left'>
            <Image
              src={logo}
              alt='Aesthetic Power Logo'
              className='w-[8rem] lg:w-[18rem] invert'
            />
            {/* company name for medium screens and bigger */}
            <h3 className='text-center hidden lg:block font-bold'>
              Aesthetic Power LLC
            </h3>
            {/* company name mobile */}
            <div className='flex flex-row self-stretch items-center w-screen px-5 lg:hidden'>
              <div className='w-full h-0.5 bg-gradient-to-r from-[#FF0000] to-[#870000] basis-1/3 md:basis-2/5' />
              <h3 className='text-[#F1F1F1] text-center px-2 basis-1/3 md:basis-1/5 font-bold'>
                Aesthetic Power LLC
              </h3>
              <div className='w-full h-0.5 bg-gradient-to-r from-[#870000] to-[#FF0000] basis-1/3 md:basis-2/5' />
            </div>
          </section>

          {/* ******** FOOTER MENU ******** */}
          <section className='text-[0.8em] py-10 self-center hidden lg:block'>
            <ul className='flex flex-col justify-center items-end gap-3'>
              <li>
                <Link href='/' className={pathname === '/' ? selected : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/memberships'
                  className={pathname === '/memberships' ? selected : ''}
                >
                  Memberships
                </Link>
              </li>
              {/* <li>
                <Link
                  href='/store'
                  className={pathname === '/store' ? selected : ''}
                >
                  Store
                </Link>
              </li> */}
              <li>
                <Link
                  href='/about'
                  className={pathname === '/about' ? selected : ''}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href='/faqs'
                  className={pathname === '/faqs' ? selected : ''}
                >
                  FAQ Section
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className={pathname === '/contact' ? selected : ''}
                >
                  Contact
                </Link>
              </li>
              {/* legal and privacy policy for medium screens and bigger added here for styling purposes */}
              <li className='underline text-[#A8B0B6] text-[0.8em] text-right pt-10'>
                Legal and Privacy Policy
              </li>
            </ul>
          </section>
        </section>

        {/* ******** VERTICAL DIVIDER ******** */}
        <section className='px-14 py-10 hidden lg:block'>
          <div className='w-[0.2rem] h-full bg-gradient-to-r from-[#FF0000] to-[#870000]' />
        </section>

        {/* RIGHT SECTION */}
        <section className='flex flex-col items-center lg:items-start pb-2 lg:pt-12 lg:pb-12 lg:basis-1/3 gap-2 lg:gap-5 lg:text-left text-[0.8em]'>
          {/* PHONE */}
          <ExternalLinkFooter
            image={phone}
            alt='phone'
            to='tel:+16513289598'
            content='(651) 328 95 98'
          />

          {/* INSTAGRAM */}
          <ExternalLinkFooter
            image={igIcon}
            alt='Instagram'
            to='https://www.instagram.com/thehenryjohnson'
            content='@TheHenryJohnson'
          />

          {/* TIKTOK */}
          <ExternalLinkFooter
            image={tiktokIcon}
            alt='TikTok'
            to='https://www.tiktok.com/@thehenryjohnson'
            content='@TheHenryJohnson'
          />

          {/* EMAIL */}
          <ExternalLinkFooter
            image={email}
            alt='email'
            to='mailto:aestheticpowermn@gmail.com'
            content='aestheticpowermn@gmail.com'
            extraClasses='lg:underline'
          />
          {/* LOCATION */}
          <ExternalLinkFooter
            image={location}
            alt='location'
            to='https://www.google.com/maps/place/Los+Campeones+Gym/@44.9626534,-93.2343362,17z/data=!3m1!4b1!4m6!3m5!1s0x52b32d3060449d95:0xbba3ab008469c856!8m2!3d44.9626534!4d-93.2317613!16s%2Fg%2F1tf_0qvy?hl=es-ES&entry=ttu'
            content={
              <>
                <span className='uppercase'>Los Campeones Franklin</span>
                <br />
                2721 East Franklin Avenue, Minneapolis, MN 55406
              </>
            }
            extraClasses='text-center lg:text-left'
          />
        </section>
      </article>

      {/* ******** LEGAL AND PRIVACY POLICY (mobile), AND COPYRIGHT SECTION ******** */}
      <article className='text-[#A8B0B6] text-center text-[0.6em] py-full'>
        <p className='underline pb-2 lg:hidden'>Legal and Privacy Policy</p>
        <h4>
          Copyright © 2023 - All Rights Reserved {width <= 640 ? <br /> : '/'}{' '}
          Website Developed and Designed by{' '}
          <a
            href='https://www.borsosmedia.com'
            target='_blank'
            className='underline'
          >
            Borsos Media
          </a>
        </h4>
      </article>
    </footer>
  )
}
