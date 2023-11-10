import React from 'react'

export const Input = () => {
  return (
    <div><input 
    className="input-google --mt-half"
    placeholder={t('global.password')}
    onChange={(e) => setPassword(e.target.value)}
    type='password'
    value={password}
  /></div>
  )
}
