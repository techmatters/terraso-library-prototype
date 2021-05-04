import React, { useState, useEffect } from 'react'

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

export default function Modal ({ open, onClose }) {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  if (seconds < 5) return null

  return (
    <>
    <div style = {OVERLAY_STYLES} />
    <div style={MODAL_STYLES}>
    <p>There is new data available, would you like to download now?</p>
    {seconds} have elapsed since mounting
    <div></div>
    <button size = 'lg'className='btn-success'>Accept</button>
    <button size = 'lg'className='btn-danger'>Decline</button>
    <div></div>
    <button onClick={onClose}> Close Modal </button>
    </div>
    </>
  )
}
