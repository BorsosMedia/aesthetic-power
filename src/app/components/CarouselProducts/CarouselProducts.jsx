'use client'

import Image from 'next/image'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

export function CarouselProducts({ products }) {
  SwiperCore.use([Autoplay, Navigation])
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#C7C7C7',
        '--swiper-navigation-sides-offset': '0'
      }}
      spaceBetween={25}
      slidesPerView={2}
      breakpoints={{
        640: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      }}
      speed={500}
      touchRatio={1.5}
      autoplay={{
        delay: 5000
      }}
      loop
      navigation
    >
      {products?.map((product, index) => (
        <SwiperSlide
          key={index}
          style={{
            '--swiper-navigation-color': '#C7C7C7',
            '--swiper-navigation-sides-offset': '0'
          }}
        >
          <section className=' font-mainFont flex flex-col items-center'>
            <section>
              <Image src={product.image} alt='product' />
            </section>
            <p className='text-center'>{product.description}</p>
            <h3 className='font-headlineFont text-5xl'>
              <span className='font-auxiliarFont'>$</span>
              {product.price}
            </h3>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
