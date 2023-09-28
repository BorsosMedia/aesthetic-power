'use client'

import logo from '../../../../public/navbar/aesthetic-power-navbar.png'
import { Hamburger } from '../Hamburger/Hamburger'
import { Links } from '../Links/Links'
import { Button } from '../ui/button'
// import styles from './NavBar.module.css'
import { Edit, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useShoppingCart } from 'use-shopping-cart'

export function NavBar() {
  const pathname = usePathname()
  const { cartCount } = useShoppingCart()

  if (pathname.startsWith('/studio')) return null
  return (
    <header className='bg-gradient-to-b from-[#000000] to-[#000000]/[0] z-20 fixed lg:absolute lg:top-0 lg:left-0 w-full py-half px-full'>
      <nav className='uppercase flex flex-row justify-between lg:justify-around items-center'>
        {/* NAVBAR */}
        <Image
          src={logo}
          alt='logo'
          className='invert w-[8rem] md:w-[9.6rem]'
        />
        <section className='hidden lg:flex flex-row gap-[3rem]'>
          <Links />
        </section>
        <section className='flex flex-row items-center gap-3'>
          {process.env.NODE_ENV === 'development' && (
            <Link href='/studio'>
              <Button size='sm' variant='ghost'>
                <Edit className='h-14 w-14' />
              </Button>
            </Link>
          )}
          {/* <Link href='/cart'>
            <Button size='sm' variant='ghost'>
              <ShoppingCart className='h-14 w-14' />
              <span className='ml-2 text-h5 font-bold'>{cartCount}</span>
              <span className='sr-only'>Cart</span>
            </Button>
          </Link> */}
          {/* <button
            className={`hidden lg:inline w-fit px-4 py-2 uppercase rounded-lg ${styles.buttonBackground}`}
          >
            register now
          </button> */}
          {/* BURGER ICON */}
          <article className='h-12 flex flex-col justify-start items-center mb-4 text-white rounded-md lg:hidden'>
            <Hamburger />
          </article>
        </section>
      </nav>
    </header>
  )
}
