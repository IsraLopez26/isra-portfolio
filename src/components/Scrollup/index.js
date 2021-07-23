import React, { useState, useEffect } from 'react'
import { ScrollUp } from './ScrollStyle'
import '../../App.css'

import { BsArrowUpShort } from 'react-icons/bs'
const ScrollTop = () => {

  const [showScrollUp, setShowScrollUp] = useState(false)

  const changeScroll = () => {
    if (window.scrollY >= 540) {
      setShowScrollUp(true)
    } else {
      setShowScrollUp(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeScroll)
  }, [])

  return (
    <>
      <ScrollUp href='#' showScrollUp={showScrollUp}>
        <BsArrowUpShort className='scrollup_icon' />
      </ScrollUp>
    </>
  )
}

export default ScrollTop
