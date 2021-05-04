import React from 'react'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 10000
}
export default function Modal ({ open, onClose }) {
  console.log('open is', open)
  if (!open) return null
  return (
    <>
    <div style={MODAL_STYLES}>
    <button onClick={onClose}> Close Modal </button>
      <p>There is new data available, would you like to download now?</p>
    </div>
    </>
  )
}
