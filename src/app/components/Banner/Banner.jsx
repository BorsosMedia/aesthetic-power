import Image from 'next/image'

export function Banner({ image, title, right }) {
  return (
    <article className='relative'>
      <Image src={image} alt={title} />
      <div
        className={`uppercase text-h2 md:text-banner font-headlineFont w-full h-full absolute top-0 left-0 px-full md:px-[10vw] py-half md:py-[2.5vw] flex flex-row items-center ${
          right ? 'justify-end' : 'justify-start'
        }`}
      >
        <h1>{title}</h1>
      </div>
    </article>
  )
}
