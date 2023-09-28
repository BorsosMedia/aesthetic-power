'use client'

import { CartItemsEmpty } from './cart-items-empty'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useToast } from './ui/use-toast'
import { shimmer, toBase64 } from '@/lib/image'
import { getSizeName } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/image'
import { Clock, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'

export function CartItems() {
  const { cartDetails, setItemQuantity, removeItem } = useShoppingCart()
  const cartItems = Object.entries(cartDetails).map(([_, product]) => product)
  const { toast } = useToast()

  function removeCartItem(product) {
    console.log(product)
    removeItem(product.id)
    toast({
      title: `${product.name} removed`,
      description: 'Product removed from cart',
      variant: 'destructive'
    })
  }

  if (cartItems.length === 0) return <CartItemsEmpty />

  return (
    <ul
      role='list'
      className='divide-y divide-[#f1f1f1] border-y border-[#f1f1f1] '
    >
      {cartItems.map((product, productIdx) => (
        <li key={product._id} className='flex py-6 sm:py-10'>
          <div className='shrink-0'>
            <Image
              src={urlForImage(product.images[0]).url()}
              alt={product.name}
              width={200}
              height={200}
              className='h-24 w-24 rounded-md border-2 border-[#f1f1f1] object-cover object-center sm:h-48 sm:w-48'
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(200, 200)
              )}`}
            />
          </div>

          <div className='ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
            <div className='relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0'>
              <div>
                <div className='flex justify-between'>
                  <h3 className=''>
                    <Link
                      href={`/products/${product.slug.current}`}
                      className='font-medium'
                    >
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className='mt-2 text-[0.8em] font-medium'>
                  {formatCurrencyString({
                    value: product.price,
                    currency: product.currency
                  })}
                </p>
                <p className='mt-2 text-[0.8em] font-medium'>
                  Size: {/* @ts-ignore */}
                  <strong>{getSizeName(product.product_data?.size)}</strong>
                </p>
              </div>

              <div className='mt-4 sm:mt-0 sm:pr-9'>
                <label htmlFor={`quantity-${productIdx}`} className='sr-only'>
                  Quantity, {product.name}
                </label>
                <Input
                  id={`quantity-${productIdx}`}
                  name={`quantity-${productIdx}`}
                  type='number'
                  className='w-16 text-2xl'
                  min={1}
                  max={9999999999}
                  value={product.quantity}
                  onChange={(event) => {
                    setItemQuantity(product.id, Number(event.target.value))
                  }}
                />
                <div className='absolute right-0 top-0'>
                  <Button
                    variant='ghost'
                    type='button'
                    className='-mr-2 inline-flex p-2'
                    onClick={() => removeCartItem(product)}
                  >
                    <span className='sr-only'>Remove</span>
                    <X className='h-5 w-5' aria-hidden='true' />
                  </Button>
                </div>
              </div>
            </div>

            <p className='mt-10 flex space-x-2 text-xl items-center'>
              <Clock className='h-5 w-5 shrink-0' aria-hidden='true' />
              <span>Ships in 1 week</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
