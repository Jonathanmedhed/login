import React from 'react'

const Link = ({ className, onClick, label }) => {
  return (
    <>
      <span 
        className={`link ${className ? className : ''}`}
        onClick={onClick} 
        onKeyDown={onClick} 
        tabIndex={0}
        type='button'>
        {label}
      </span>
    </>
  )
}

export default Link;