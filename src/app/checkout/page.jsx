'use client'

import product from '../../../public/store/product-6.png'
import styles from './Checkout.module.css'
import { Box, Typography } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import Image from 'next/image'
import * as yup from 'yup'

export default function checkoutForm() {
  const fieldClasses = `bg-transparent rounded-none border-2 px-5 h-fit border-[#F1F1F1]`

  return (
    <main
      className={`flex flex-col items-center px-full md:px-[10vw] py-half md:py-[2.5vw] ${styles.mainBackground}`}
    >
      <Box m='20px'>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zipCode: ''
          }}
          onSubmit={() => {}}
        >
          {() => (
            <Form className='mt-[100px] grid grid-cols-3 text-[#F1F1F1] text-[#F1F1F1]::placeholder w-[80vw] gap-20'>
              <section>
                <div className='font-mainFont grid grid-cols-2 gap-2 mb-20'>
                  <Typography variant='h5' className='col-span-2 text-center'>
                    Contact Information
                  </Typography>
                  <Field
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder='First Name *'
                    className={fieldClasses}
                  />
                  <Field
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='Last Name *'
                    className={fieldClasses}
                  />
                  <Field
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email *'
                    className={`col-span-2 ${fieldClasses}`}
                  />
                  <Field
                    type='text'
                    name='phone'
                    id='phone'
                    placeholder='Phone *'
                    className={`col-span-2 ${fieldClasses}`}
                  />
                </div>

                <div className='grid grid-cols-2 gap-2'>
                  <Typography variant='h5' className='col-span-2 text-center'>
                    Shipping Address
                  </Typography>
                  <Field
                    type='text'
                    name='address1'
                    id='address1'
                    placeholder='Address *'
                    className={`col-span-2 ${fieldClasses}`}
                  />
                  <Field
                    type='text'
                    name='address2'
                    id='address2'
                    placeholder='Apartment / Suite # *'
                    className={`col-span-2 ${fieldClasses}`}
                  />
                  <Field
                    type='text'
                    name='city'
                    id='city'
                    placeholder='City *'
                    className={`col-span-2 ${fieldClasses}`}
                  />
                  <Field
                    type='text'
                    name='state'
                    id='state'
                    placeholder='State *'
                    className={fieldClasses}
                  />
                  <Field
                    type='text'
                    name='zipCode'
                    id='zipCode'
                    placeholder='ZIP Code *'
                    className={fieldClasses}
                  />
                </div>
              </section>
              <div className='hidden w-[0.2rem] md:block self-stretch bg-gradient-to-r from-[#FF0000] to-[#870000] mt-1 mb-2' />
              <section>
                <Typography variant='h5' className='text-center'>
                  Order Sumary
                </Typography>

                <div className='grid grid-cols-4'>
                  <Image src={product} alt='product' />
                  <div className='col-span-2'>
                    <Typography>Lorem Ipsum Lorem Ipsum</Typography>
                    <Typography>Size M</Typography>
                  </div>
                  <Typography>$20</Typography>

                  <Typography className='col-start-2 col-end-4'>
                    Shipping
                  </Typography>
                  <Typography>$0</Typography>
                </div>
                <div className='h-[0.2rem] md:hidden self-stretch bg-gradient-to-r from-[#FF0000] to-[#870000] mt-1 mb-2 basis-1-3' />
                <div></div>
                <button
                  type='submit'
                  className='bg-gradient-to-b from-[#C3C3C3] to-[#D8D8D8] text-[#333333]'
                >
                  Continue to Payment
                </button>
              </section>
            </Form>
          )}
        </Formik>
      </Box>
    </main>
  )
}
