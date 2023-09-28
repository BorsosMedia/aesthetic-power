'use client'

import Link from 'next/link'

export function GrayButton({ content, to }) {
  return (
    <button className='uppercase text-[#171717] font-bold bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF]/[0.6] py-1 px-10 my-5 hover:cursor-pointer hover:scale-105 active:scale-95 transition-all ease-in-out duration-300 rounded'>
      <Link href={to}>{content}</Link>
    </button>
  )
}
