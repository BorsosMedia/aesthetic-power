import Image from 'next/image'

export function Target({ name, image, flip, title, content }) {
  return (
    <div className='flex flex-col items-start cursor-pointer group'>
      <h3 className='my-half'>
        <span className='relative before:content-[""] before:absolute before:top-full before:w-full before:left-0 before:h-0.5 before:rounded-sm before:bg-gradient-to-r before:from-[#FF0000] before:to-[#870000]'>
          {name}
        </span>
      </h3>
      <div className='relative'>
        <Image
          src={image}
          alt={name}
          className={`rounded-xl object-cover block w-screen targets:w-[24rem] h-[40rem] transition-all duration-1000 ease-in-out targets:group-hover:w-[32rem] ${
            flip ? '-scale-x-100' : ''
          }`}
        />
        <div className='absolute top-0 left-0 rounded-xl w-full h-full bg-[#000000] opacity-[0] group-hover:opacity-[0.6] object-fit block ease-in-out duration-1000' />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center opacity-[0] group-hover:opacity-[1] hover:opacity-[1] ease-in-out duration-1000'>
          <h3 className='uppercase text-h3 font-headlineFont leading-none'>
            {title}
          </h3>
          <p className='text-[0.8em] leading-none mt-14'>{content}</p>
        </div>
      </div>
    </div>
  )
}
