'use client'

import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'

export function CartSummary() {
  const { formattedTotalPrice, totalPrice, cartDetails, cartCount } =
    useShoppingCart()
  const shippingAmount = cartCount > 0 ? 500 : 0
  const totalAmount = totalPrice + shippingAmount

  const [isLoading, setIsLoading] = useState(false)

  const isDisabled = isLoading || cartCount === 0

  function onCheckout() {}

  return (
    <section
      aria-labelledby='summary-heading'
      className='mt-16 rounded-lg border-2 border-[#f1f1f1] px-4 py-6 shadow-md sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'
    >
      <h2 id='summary-heading' className='text-h5 font-medium'>
        Order summary
      </h2>

      <dl className='mt-6 space-y-4'>
        <div className='flex items-center justify-between'>
          <dt className='text-[0.8em]'>Subtotal</dt>
          <dd className='text-[0.8em] font-medium'>{formattedTotalPrice}</dd>
        </div>
        <div className='flex items-center justify-between border-t border-[#f1f1f1] pt-4'>
          <dt className='flex items-center'>
            <span className='text-[0.8em]'>Shipping estimate</span>
          </dt>
          <dd className=' text-[0.8em] font-medium'>
            {formatCurrencyString({ value: shippingAmount, currency: 'USD' })}
          </dd>
        </div>
        <div className='flex items-center justify-between border-t border-[#f1f1f1] pt-4'>
          <dt className='text-h6 font-medium'>Order total</dt>
          <dd className='text-h6 font-medium'>
            {formatCurrencyString({ value: totalAmount, currency: 'USD' })}
          </dd>
        </div>
      </dl>

      <div className='mt-6'>
        <Button onClick={onCheckout} className='w-full' disable={isDisabled}>
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
          {isLoading ? 'Loading...' : 'Checkout'}
        </Button>
      </div>
    </section>
  )
}
