'use client'

import { CartItems } from '../components/cart-items'
import { CartSummary } from '../components/cart-summary'
import styles from './Cart.module.css'

export default function Cart() {
  return (
    <div
      className={`${styles.mainBackground} px-full md:px-[10vw] py-half md:py-[5vw]`}
    >
      <main className='mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='text-h4 font-bold tracking-tight'>Shopping Cart</h1>

        <form className='mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16'>
          <section aria-labelledby='cart-heading' className='lg:col-span-7'>
            <h2 id='cart-heading' className='sr-only'>
              Items in your shopping cart
            </h2>
            {/* Cart Items */}
            <CartItems />
          </section>
          {/* Cart Summary */}
          <CartSummary />
        </form>
      </main>
    </div>
  )
}
