import { useEffect, useState } from 'react'

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 'undefined',
    height: 'undefined'
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
