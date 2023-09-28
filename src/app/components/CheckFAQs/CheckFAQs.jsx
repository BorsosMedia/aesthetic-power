import Link from 'next/link'

export function CheckFAQs() {
  return (
    <section className='flex flex-col justify-center items-center text-center my-full mx-xl md:px-xxl'>
      <h3 className='text-h6 md:w-[80%]'>
        Do you have any questions? <br className='md:hidden' />
        <span className='font-black whitespace-nowrap'>
          Find your answers in my FAQ section.
        </span>
      </h3>
      <button className='uppercase bg-gradient-to-r from-[#9E0404] to-[#5F0101] text-h5 px-full mt-full hover:cursor-pointer hover:scale-105 active:scale-95 transition-all ease-in-out duration-300 font-headlineFont'>
        <Link href='/faqs'>FAQ section</Link>
      </button>
    </section>
  )
}
