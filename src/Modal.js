import React, { useState, useEffect } from 'react'
import { GetTimestamp } from './CacheFunctions'
// import { config } from './config'
// var delay = config.url.DELAY
const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 10000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: 1000
}

export default function Modal () {
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      GetTimestamp().then(result => setDisplay(result))
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  if (!display) return null
  return (
    <>
    <div style = {OVERLAY_STYLES} />
    <div style={MODAL_STYLES}>
    <p>There is new data available, would you like to download now?</p>
    <div></div>
    <button onClick={() => { setDisplay(false); window.localStorage.setItem('wasDeclined', false) }} size = 'lg'className='btn-success'>Accept</button>
    <button onClick={() => { setDisplay(false); window.localStorage.setItem('wasDeclined', true) }} size = 'lg'className='btn-danger'>Decline</button>
    <div></div>
    </div>
    </>
  )
}
