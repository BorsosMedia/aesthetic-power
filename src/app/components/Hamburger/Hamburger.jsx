'use client'

import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { HamburgerIcon } from '../HamburgerIcon/HamburgerIcon'
import { Links } from '../Links/Links'

export function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen)
  }

  const handleOnClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className='relative my-2 mx-1'>
      <Menu
        customBurgerIcon={<HamburgerIcon />}
        width='auto'
        className='right-0 top-0'
        right
        isOpen={isMenuOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <Links onClick={handleOnClick} />
      </Menu>
    </div>
  )
}
