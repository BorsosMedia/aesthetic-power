'use client'

import Image from 'next/image'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

export function Testimonials({ testimonials }) {
  SwiperCore.use([Autoplay, Navigation])
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#C7C7C7',
        '--swiper-navigation-sides-offset': '0',
        '--swiper-navigation-top-offset': '17.5%'
      }}
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
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
      {testimonials?.map((testimonial, index) => (
        <SwiperSlide
          key={index}
          style={{
            '--swiper-navigation-color': '#C7C7C7',
            '--swiper-navigation-sides-offset': '0',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <section className='font-mainFont flex flex-col items-center gap-4 w-[80%]'>
            <section>
              <Image src={testimonial.image} alt='testimonial' />
            </section>
            <h3 className='text-h5'>{testimonial.name}</h3>
            <p className='text-[0.8em]'>{testimonial.testimony}</p>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
