import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import { checkPasswordValidity, checkEmailValidity } from '../../utilities/filter-pass/filter-pass';

/**
 * Container for all pages, takes a children prop
 * <ContainerMain children={Login}/>
 */
const Input = ({ className, placeholder, onChange, type, value, error, match }) => {

  const { t } = useTranslation();

  const [passError, setPassError] = useState(false);

  const changeHandler = (eValue) => {
    onChange(eValue);
    if(type === 'password'){
      if(checkPasswordValidity(eValue)){
        setPassError(t(checkPasswordValidity(eValue)));
      } else if(match && match !== eValue){
        setPassError(t('error.match'));
      } else {
        setPassError(false);
      }
    } else if(type === 'email') {
      if(checkEmailValidity(eValue)){
        setPassError(t(checkEmailValidity(eValue)));
      } else {
        setPassError(false);
      }
    }
  }

  return (
    <>
      <input 
        className={className}
        onChange={(e) => changeHandler(e.target.value)}
        placeholder={placeholder}
        type={type ? type : 'text'}
        value={value}
      />
      {error && <span className='input__error'>{error}</span>}
      {passError && <span className='input__error'>{passError}</span>}
    </>
  )
}

export default Input;
