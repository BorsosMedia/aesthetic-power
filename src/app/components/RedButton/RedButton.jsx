import Link from 'next/link'

export function RedButton({ content, link }) {
  return (
    <button className='uppercase bg-gradient-to-r from-[#9E0404] to-[#5F0101] text-h4 px-full my-full hover:cursor-pointer hover:scale-105 active:scale-95 transition-all ease-in-out duration-300 font-headlineFont'>
      <Link href={link}>{content}</Link>
    </button>
  )
}
