'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

export function SwiperProduct({ products }) {
  SwiperCore.use([Autoplay, Pagination])

  return (
    <Swiper
      style={{
        '--swiper-pagination-color': '#9E0404',
        '--swiper-pagination-bullet-inactive-color': '#D9D9D9',
        '--swiper-pagination-bullet-inactive-opacity': '1'
      }}
      spaceBetween={0}
      slidesPerView={1}
      speed={500}
      touchRatio={1.5}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      loop
      centeredSlides
    >
      {products?.map((product, index) => (
        <SwiperSlide
          key={index}
          style={{
            '--swiper-pagination-color': '#9E0404',
            '--swiper-pagination-bullet-inactive-color': '#D9D9D9',
            '--swiper-pagination-bullet-inactive-opacity': '1'
          }}
        >
          <Image src={product.image} alt={product.alt} className='mb-full' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
