'use client'

// import product1 from '../../../public/store/product-1.png'
import bannerMobile from '../../../public/store/store-banner-mobile.png'
import banner from '../../../public/store/store-banner.jpg'
import { Banner } from '../components/Banner/Banner'
// import { Product } from '../components/Product/Product'
import { ProductFilters } from '../components/product-filters'
import { ProductGrid } from '../components/product-grid'
import { ProductSort } from '../components/product-sort'
import styles from './Store.module.css'
import { cn } from '@/lib/utils'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { useEffect, useState } from 'react'

export default function Store(props) {
  const [products, setProducts] = useState([])

  const { date = 'desc', price, color, category, size } = props.searchParams

  const priceOrder = price ? `| order(price ${price})` : ''
  const dateOrder = date ? `| order(_createdAt ${date})` : ''
  const order = `${priceOrder}${dateOrder}`

  const productFilter = `_type == "product"`
  const colorFilter = color ? `&& "${color}" in colors` : ''
  const categoryFilter = category ? `&& "${category}" in categories` : ''
  const sizeFilter = size ? `&& "${size}" in sizes` : ''
  const filter = `*[${productFilter}${colorFilter}${categoryFilter}${sizeFilter}]`

  const fetchProducts = async () => {
    const fetchedProducts = await client.fetch(groq`${filter} ${order}`)
    setProducts(fetchedProducts)
  }

  useEffect(() => {
    fetchProducts()
  }, [props.searchParams])

  return (
    <main className={`flex flex-col items-center ${styles.mainBackground}`}>
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
          className={`${styles.wheelsBackground} absolute h-full w-full top-0 left-0 -z-10`}
        />
        <section>
          <h2 className='uppercase text-h2 font-headlineFont text-center leading-none'>
            Official Aesthetic Power Merch
          </h2>
          <p className='mt-5 mb-5 md:mb-20 text-h6 text-center'>
            If we're going to kick some ass, we better look good.
          </p>
        </section>

        <section
          // className='flex flex-row flex-wrap md:px-[10%]'
          className='w-screen px-[10%]'
        >
          <div className='flex items-center justify-between border-b border-[#9e0404] pb-4 pt-24'>
            <h2 className='font-bold tracking-tight'>
              {products.length} result{products.length === 1 ? '' : 's'}
            </h2>
            {/* Product Sort */}
            <ProductSort fetchProducts={fetchProducts} />
          </div>
          <div aria-labelledby='products-heading' className='pb-24 pt-6'>
            <h2 id='products-heading' className='sr-only'>
              Products
            </h2>
            <div
              className={cn(
                'grid grid-cols-1 gap-x-8 gap-y-10',
                products.length > 0
                  ? 'lg:grid-cols-4'
                  : 'lg:grid-cols-[1fr_3fr]'
              )}
            >
              <div className='hidden lg:block'>
                {/* Product filters */}
                <ProductFilters fetchProducts={fetchProducts} />
              </div>
              {/* Product grid */}
              <ProductGrid products={products} />
            </div>
          </div>

          {/* <Product
            products={[
              { image: product1, alt: 'red shirt', id: 1 },
              { image: product1, alt: 'red shirt', id: 2 },
              { image: product1, alt: 'red shirt', id: 3 }
            ]}
            description='Lorem Ipsum Lorem Ipsum'
            price='20'
          />
          */}
        </section>
      </article>
    </main>
  )
}
