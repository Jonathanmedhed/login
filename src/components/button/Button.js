import React, { useState } from 'react'
import Loader from '../loader/Loader';

const Button = ({ className, onClick, label, error, disabled }) => {

  const [isLoading, setIsLoading] = useState();
  
  const onClickHandler = async () => {
    if(!disabled){
      setIsLoading(true);
      await onClick();
      setIsLoading(false);
    }
  }

  return (
    <>
    <span 
      className={`btn ${className ? className : ''} ${disabled ? '--op-5' : ''}`}
      onClick={onClickHandler} 
      onKeyDown={onClickHandler} 
      tabIndex={0}
      type='button'>
        {isLoading ? <Loader/> : label}
    </span>
    {error && <span className='input__error'>{error}</span>}
    </>
  )
}

export default Button;
