import React, { useState, useEffect } from 'react'
import { GetTimestamp, UpdateQuery } from './CacheFunctions'
import { CompareDates } from './DateFunctions'
import { config } from './config'
const DELAY = config.url.DELAY

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
  const [timeLeft, setTimeLeft] = useState(0)
  const [display, setDisplay] = useState(false)
  const [time, setTime] = useState(CompareDates(window.localStorage.getItem('Timestamp')))
  
  useEffect(() => {
    if (!timeLeft) {
      GetTimestamp().then(result => { setDisplay(result); if (!result) setTimeLeft(DELAY) })
      return
    }
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [timeLeft])
  if (!display) return null
  
  return (
    <>
    <div style = {OVERLAY_STYLES} />
    <div style={MODAL_STYLES}>
    <p>There is new data available, would you like to download now? It has been <text style={{fontWeight: "bold"}}> {time}</text> days since you last updated your data</p>
    
    <div></div>
    <button onClick={() => { setTimeLeft(DELAY); setDisplay(false); window.localStorage.setItem('wasDeclined', true) }} size = 'lg'  style={{ marginRight: '2rem' }}>Not Right Now</button>
    <button onClick={() => { setTimeLeft(DELAY); setDisplay(false); UpdateQuery(); window.localStorage.setItem('wasDeclined', false) }} size = 'lg'className='btn-primary'>Download Updated Data</button>

    <div></div>
    </div>
    </>
  )
}