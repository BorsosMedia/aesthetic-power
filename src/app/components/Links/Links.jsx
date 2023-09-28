'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Links({ onClick }) {
  const pathname = usePathname()

  const generalClasses =
    'bg-no-repeat bg-left-bottom pb-[4px] rounded-sm bg-gradient-to-r from-[#FF0000] to-[#870000] w-fit'
  const selected = 'bg-[length:100%_2px]'
  const notSelected =
    'bg-[length:0%_2px] hover:bg-[length:100%_3px] transition-all ease-in-out duration-500'

  return (
    <>
      <Link onClick={onClick} href='/'>
        <span
          className={`${generalClasses} ${
            pathname === '/' ? selected : notSelected
          }`}
        >
          Home
        </span>
      </Link>
      <Link onClick={onClick} href='/memberships'>
        <span
          className={`${generalClasses} ${
            pathname === '/memberships' ? selected : notSelected
          }`}
        >
          memberships
        </span>
      </Link>
      <Link onClick={onClick} href='/store'>
        <span
          className={`${generalClasses} ${
            pathname === '/store' ? selected : notSelected
          }`}
        >
          store
        </span>
      </Link>
      <Link onClick={onClick} href='/about'>
        <span
          className={`${generalClasses} ${
            pathname === '/about' ? selected : notSelected
          }`}
        >
          about me
        </span>
      </Link>
      <Link onClick={onClick} href='/faqs'>
        <span
          className={`${generalClasses} ${
            pathname === '/faqs' ? selected : notSelected
          }`}
        >
          FAQ section
        </span>
      </Link>
      <Link onClick={onClick} href='/contact'>
        <span
          className={`${generalClasses} ${
            pathname === '/contact' ? selected : notSelected
          }`}
        >
          contact
        </span>
      </Link>
      {/* <Link onClick={onClick} href='#'>
        <span
          className={`${generalClasses} md:hidden ${
            pathname === '#' ? selected : notSelected
          }`}
        >
          register now
        </span>
      </Link> */}
    </>
  )
}
