'use client'

import { shimmer, toBase64 } from '@/lib/image'
import { urlForImage } from '@/sanity/lib/image'
import { XCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { formatCurrencyString } from 'use-shopping-cart'

export function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className='mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed py-10 text-center'>
        <div>
          <XCircle className='mx-auto h-10 w-10 text-[#F1F1F1]' />
          <h1 className='mt-2 font-bold tracking-tight text-[#F1F1F1]'>
            No products found
          </h1>
        </div>
      </div>
    )
  }
  return (
    <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8'>
      {products.map((product) => (
        <Link
          key={product._id}
          href={`/products/${product.slug.current}`}
          className='group text-[0.8em]'
        >
          <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-2 border-[#F1F1F1] group-hover:opacity-75'>
            <Image
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(225, 280)
              )}`}
              src={urlForImage(product.images[0]).url()}
              alt={product.name}
              width={225}
              height={280}
              className='h-full w-full object-cover object-center'
            />
          </div>
          <h3 className='mt-4 font-medium'>{product.name}</h3>
          <p className='mt-2 font-medium'>
            {formatCurrencyString({
              currency: product.currency,
              value: product.price
            })}
          </p>
        </Link>
      ))}
    </div>
  )
}
