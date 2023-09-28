'use client'

import { useState } from 'react'
import { Box, Select, InputLabel, MenuItem, FormControl } from '@mui/material'
import { PlanButton } from '../PlanButton/PlanButton'
import { OnlinePlansMobile } from '../OnlinePlansMobile/OnlinePlansMobile'
import { InPersonPlansMobile } from '../InPersonPlansMobile/InPersonPlansMobile'
import { OnlinePlans } from '../OnlinePlans/OnlinePlans'
import { InPersonPlans } from '../InPersonPlans/InPersonPlans'

export function Plans() {
  const [plan, setPlan] = useState('monthly')
  const [type, setType] = useState('online')

  const handlePlanChange = (event) => {
    setPlan(event.target.value)
  }

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }

  const generalClasses =
    'bg-no-repeat bg-left-bottom pb-[4px] rounded-sm bg-gradient-to-r from-[#FF0000] to-[#870000] text-right'
  const selected = 'bg-[length:100%_2px]'
  const notSelected =
    'bg-[length:0%_2px] hover:bg-[length:100%_3px] transition-all ease-in-out duration-500'

  return (
    <section className='w-full block'>
      {/* ********************************************************* TYPE SECTION *********************************************************** */}
      <fieldset
        onChange={handleTypeChange}
        className='flex flex-row justify-center items-center gap-half uppercase pt-half'
      >
        <div className='flex flex-row justify-end w-full'>
          <input
            type='radio'
            name='types'
            id='online'
            value='online'
            className='hidden'
            defaultChecked
          />
          <label htmlFor='online' className='cursor-pointer'>
            <span
              className={`${generalClasses} ${
                type === 'online' ? selected : notSelected
              }`}
              style={
                type === 'online' ? { textShadow: '#F1F1F1 1px 0 10px' } : {}
              }
            >
              online
            </span>
          </label>
        </div>

        <div className='w-[0.3rem] self-stretch bg-gradient-to-r from-[#FF0000] to-[#870000] mt-1 mb-2' />

        <div className='flex flex-row justify-start w-full'>
          <input
            type='radio'
            name='types'
            id='in-person'
            value='in-person'
            className='hidden'
          />
          <label htmlFor='in-person' className='cursor-pointer'>
            <span
              className={`${generalClasses} ${
                type === 'in-person' ? selected : notSelected
              }`}
              style={
                type === 'in-person' ? { textShadow: '#F1F1F1 1px 0 10px' } : {}
              }
            >
              in person
            </span>
          </label>
        </div>
      </fieldset>
      {/* ********************************************************* BUTTONS SECTION *********************************************************** */}
      {/* MOBILE */}
      <Box
        className={`lg:hidden flex-col justify-center items-center text-[#F1F1F1] min-w-[120px] my-full ${
          type === 'in-person' ? 'hidden' : 'flex'
        }`}
      >
        <FormControl fullWidth>
          <InputLabel
            id='plans'
            sx={{
              color: '#F1F1F1',
              fontFamily: 'RobotoCondensed',
              '&.Mui-focused': {
                color: '#F1F1F1'
              }
            }}
            style={{
              fontSize: '1em'
            }}
          >
            Plan
          </InputLabel>
          <Select
            labelId='plans'
            id='plan'
            value={plan}
            label='Plan'
            onChange={handlePlanChange}
            MenuProps={{
              PaperProps: {
                sx: {
                  background: '#000',
                  color: '#F1F1F1',
                  padding: '0',
                  fontSize: '1em'
                }
              }
            }}
            sx={{
              color: '#F1F1F1',
              borderRadius: '0px',
              fontFamily: 'RobotoCondensed',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: '#F1F1F1'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F1F1F1'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F1F1F1'
              },
              '.MuiSvgIcon-root ': {
                fill: '#F1F1F1'
              }
            }}
            style={{
              fontSize: '1em'
            }}
          >
            <MenuItem sx={{ fontSize: '1em' }} value='monthly'>
              Monthly
            </MenuItem>
            <MenuItem sx={{ fontSize: '1em' }} value='3-months'>
              3 Months
            </MenuItem>
            <MenuItem sx={{ fontSize: '1em' }} value='6-months'>
              6 Months
            </MenuItem>
            <MenuItem sx={{ fontSize: '1em' }} value='annual'>
              Annual
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* BIGGER THAN MOBILE */}
      <fieldset
        onChange={handlePlanChange}
        className={`hidden flex-row justify-center items-center gap-half my-half ${
          type !== 'in-person' ? 'lg:flex' : ''
        }`}
      >
        <PlanButton id='monthly' />
        <PlanButton id='3' />
        <PlanButton id='6' />
        <PlanButton id='annual' />
      </fieldset>

      {/* ********************************************************* CARDS SECTION *********************************************************** */}
      {/* MOBILE */}
      <div className='md:hidden w-full'>
        <OnlinePlansMobile plan={plan} type={type} />
        <InPersonPlansMobile type={type} />
      </div>
      {/* BIGGER THAN MOBILE */}
      <div className='hidden md:block w-full'>
        <OnlinePlans plan={plan} type={type} />
        <InPersonPlans type={type} />
      </div>
    </section>
  )
}
