import { SwiperProduct } from '../SwiperProduct/SwiperProduct'

export function Product({ products, description, price }) {
  return (
    <section className='text-[#F1F1F1] font-mainFont flex flex-col items-center grow w-1/2 md:w-1/3 my-full'>
      <section className='w-[40vw] md:w-[32rem]'>
        <SwiperProduct products={products} />
      </section>
      <p>{description}</p>
      <h3 className='font-headlineFont text-h3'>
        <span className='font-auxiliarFont'>$</span>
        {price}
      </h3>
    </section>
  )
}
