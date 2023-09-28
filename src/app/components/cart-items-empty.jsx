'use client'

import { Button } from './ui/button'
import { Plus, XCircle } from 'lucide-react'
import Link from 'next/link'

export function CartItemsEmpty() {
  return (
    <div className='flex h-[450px] shrink-0 items-center justify-center rounded-md border-2 border-dashed border-[#f1f1f1]'>
      <div className='mx-auto flex max-w-[420px] flex-col items-center justify-center text-center'>
        <XCircle className='h-10 w-10 text-muted-foreground' />
        <h3 className='mt-4 text-h6 font-semibold'>No products added</h3>
        <p className='mb-4 mt-2 text-muted-foreground'>
          Add products to your cart.
        </p>
        <Link href='/store'>
          <Button size='sm' className='relative'>
            <Plus className='mr-2 h-4 w-4' />
            Add Products
          </Button>
        </Link>
      </div>
    </div>
  )
}
