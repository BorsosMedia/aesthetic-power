'use client'

import { Button } from './ui/button'
import { useToast } from './ui/use-toast'
import { getSizeName } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'

export function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  const { addItem, cartDetails, incrementItem } = useShoppingCart()
  const { toast } = useToast()
  const isInCart = !!cartDetails?.[product._id]

  function addToCart() {
    const item = {
      ...product,
      product_data: {
        size: selectedSize
      }
    }
    isInCart ? incrementItem(item._id) : addItem(item)
    toast({
      title: `${item.name} (${getSizeName(selectedSize)})`,
      description: 'Product added to cart',
      action: (
        <Link href='/cart'>
          <Button variant='link' className='gap-x-2 whitespace-nowrap'>
            <span>Open cart</span>
            <ArrowRight className='h-5 w-5' />
          </Button>
        </Link>
      )
    })
  }

  return (
    <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
      <h2 className='text-h4 font-bold tracking-tight'>{product.name}</h2>

      <div className='mt-3'>
        <h2 className='sr-only'>Product information</h2>
        <p className='text-h6 tracking-tight'>
          {formatCurrencyString({
            currency: product.currency,
            value: product.price
          })}
        </p>
      </div>

      <div className='mt-6'>
        <h3 className='sr-only'>Description</h3>
        <div className='space-y-6 text-[0.8em]'>{product.description}</div>
      </div>

      <div className='mt-4'>
        <p>
          Size: <strong>{getSizeName(selectedSize)}</strong>
        </p>
        {product.sizes.map((size) => (
          <Button
            onClick={() => setSelectedSize(size)}
            key={size}
            variant={selectedSize === size ? 'default' : 'outline'}
            className='mr-2 mt-4'
          >
            {getSizeName(size)}
          </Button>
        ))}
      </div>

      <form className='mt-6'>
        <div className='mt-4 flex'>
          <Button
            type='button'
            onClick={addToCart}
            className='w-full bg-[#9e0404] py-6 text-xl font-medium text-[#f1f1f1] hover:bg-[#870000] focus:outline-none focus:ring-2 focus:ring-[#870000]'
          >
            Add to cart
          </Button>
        </div>
      </form>
    </div>
  )
}
