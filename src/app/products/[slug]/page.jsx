'use client'

import bannerMobile from '../../../../public/store/store-banner-mobile.png'
import banner from '../../../../public/store/store-banner.jpg'
import { Banner } from '../../components/Banner/Banner'
import { ProductGallery } from '../../components/product-gallery'
import { ProductInfo } from '../../components/product-info'
import styles from './Product.module.css'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { useEffect, useState } from 'react'

export default function Product(props) {
  const [product, setProduct] = useState('')

  const { slug } = props.params

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await client.fetch(
        groq`*[_type == "product" && slug.current == "${slug}"][0]`
      )
      setProduct(fetchedProduct)
    }
    fetchProduct()
  }, [])

  return (
    <main
      className={`flex flex-col items-center
    ${styles.mainBackground}`}
    >
      {/* BANNER MOBILE */}
      <div className='md:hidden'>
        <Banner image={bannerMobile} title='store' />
      </div>
      {/* BANNER BIGGER THAN MOBILE */}
      <div className='hidden md:block'>
        <Banner image={banner} title='store' />
      </div>

      <article className='px-full md:px-[10vw] py-half md:py-[2.5vw] relative z-10'>
        <div
          className={`${styles.wheelsBackground} absolute h-full w-screen top-0 left-0 -z-10`}
        />
        <div className='mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            {/* Product */}
            {product && (
              <div className='pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12'>
                {/* Product gallery */}
                <ProductGallery product={product} />
                {/* Product info */}
                <ProductInfo product={product} />
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  )
}
