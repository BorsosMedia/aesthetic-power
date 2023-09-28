'use client'

import SwiperCore, { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import athlete from '../../../../public/home/athlete.png'
import bodybuilder from '../../../../public/home/bodybuilder.png'
import firstTimer from '../../../../public/home/first-timer.png'
import senior from '../../../../public/home/senior.png'
import teen from '../../../../public/home/teen.png'
import { Target } from '../Target/Target'

export function SwiperTargets() {
  SwiperCore.use([Autoplay, Pagination])

  return (
    <Swiper
      style={{
        '--swiper-pagination-color': '#9E0404',
        '--swiper-pagination-bullet-inactive-color': '#D9D9D9',
        '--swiper-pagination-bullet-inactive-opacity': '1'
      }}
      spaceBetween={5}
      slidesPerView={1}
      speed={500}
      touchRatio={1.5}
      breakpoints={{
        520: {
          slidesPerView: 2
        },
        640: {
          slidesPerView: 3
        }
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      pagination={{
        clickable: true
      }}
      loop
      centeredSlides={true}
    >
      <SwiperSlide
        style={{
          '--swiper-pagination-color': '#9E0404',
          '--swiper-pagination-bullet-inactive-color': '#D9D9D9',
          '--swiper-pagination-bullet-inactive-opacity': '1'
        }}
      >
        <Target
          name='First-timers'
          image={firstTimer}
          flip='true'
          title={
            <>
              First<span className='font-auxiliarFont'>-</span>Timers
            </>
          }
          content={
            <>
              No experience? <br /> No problem
            </>
          }
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          '--swiper-pagination-color': '#9E0404',
          '--swiper-pagination-bullet-inactive-color': '#D9D9D9',
          '--swiper-pagination-bullet-inactive-opacity': '1'
        }}
      >
        <Target
          name='Seniors'
          image={senior}
          flip='true'
          title='Seniors'
          content='Age is not a limit'
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          '--swiper-pagination-color': '#9E0404',
          '--swiper-pagination-bullet-inactive-color': '#D9D9D9',
          '--swiper-pagination-bullet-inactive-opacity': '1'
        }}
      >
        <Target
          name='Teens'
          image={teen}
          flip='true'
          title='Teens'
          content={
            <>
              Important early <br /> development
            </>
          }
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          '--swiper-pagination-color': '#9E0404',
          '--swiper-pagination-bullet-inactive-color': '#D9D9D9',
          '--swiper-pagination-bullet-inactive-opacity': '1'
        }}
      >
        <Target
          name='Experienced Athletes'
          image={athlete}
          title={
            <>
              Experienced <br /> Athletes
            </>
          }
          content='Reach that next level'
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          '--swiper-pagination-color': '#9E0404',
          '--swiper-pagination-bullet-inactive-color': '#D9D9D9',
          '--swiper-pagination-bullet-inactive-opacity': '1'
        }}
      >
        <Target
          name='Bodybuilders'
          image={bodybuilder}
          title='Bodybuilders'
          content='Prepare for competition'
        />
      </SwiperSlide>
    </Swiper>
  )
}
