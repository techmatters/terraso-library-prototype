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
  const [seconds, setSeconds] = useState(0)
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(GetTimestamp())
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  const resetInterval = () => setSeconds(0)
  if (!display) return null
  return (
    <>
    <div style = {OVERLAY_STYLES} />
    <div style={MODAL_STYLES}>
    <p>There is new data available, would you like to download now?</p>
    {seconds} seconds have elapsed
    <div></div>
    <button onClick={resetInterval} size = 'lg'className='btn-success'>Accept</button>
    <button onClick={resetInterval} size = 'lg'className='btn-danger'>Decline</button>
    <button onClick={() => GetTimestamp()} size = 'lg' classame='btn-danger'>fuck off eslint</button>
    <button onClick={() => setDisplay(false)} size = 'lg' classame='btn-danger'>fuck off eslint</button>
    <div></div>
    </div>
    </>
  )
}
