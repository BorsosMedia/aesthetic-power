'use client'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import { useState } from 'react'

export function AskedQuestion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Accordion
      sx={{
        background: 'none',
        boxShadow: 'none'
      }}
      className='my-full'
    >
      <AccordionSummary
        sx={{ color: '#F1F1F1' }}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <Typography
          variant='h5'
          fontFamily='Roboto Condensed'
          fontWeight='bold'
          fontSize='1.2em'
        >
          {question}
          <ExpandMoreIcon
            sx={{
              color: '#9E0404',
              fontSize: '40px'
            }}
            className={`${
              isOpen ? 'rotate-180' : ''
            } ease-in-out duration-500 transition-all`}
          />
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ color: 'white' }}>
        <Typography fontFamily='Roboto Condensed' fontSize='1em'>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
