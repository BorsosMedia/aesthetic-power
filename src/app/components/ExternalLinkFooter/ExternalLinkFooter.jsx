import Image from 'next/image'

export function ExternalLinkFooter({
  image,
  alt,
  to,
  content,
  extraClasses = ''
}) {
  const externalLinksStyling = `flex flex-row items-center gap-2 ${extraClasses}`
  const iconWidth = 'w-[1.5rem]'

  return (
    <div className={externalLinksStyling}>
      <Image src={image} alt={alt} className={iconWidth} />
      <a className='px-7' href={to}>
        {content}
      </a>
    </div>
  )
}
