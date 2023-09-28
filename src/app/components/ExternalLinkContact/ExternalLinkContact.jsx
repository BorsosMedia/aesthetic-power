import Image from 'next/image'

export function ExternalLinkContact({
  image,
  alt,
  to,
  content,
  extraClasses = ''
}) {
  const externalLinksStyling = `flex flex-col md:flex-row items-center gap-5 ${extraClasses}`
  const iconWidth = 'w-[3.5rem]'

  return (
    <div className={externalLinksStyling}>
      <Image src={image} alt={alt} className={iconWidth} />
      <div className='flex flex-col items-center md:items-start'>
        <h6 className='text-h6 font-bold'>{alt}</h6>
        <a href={to}>{content}</a>
      </div>
    </div>
  )
}
