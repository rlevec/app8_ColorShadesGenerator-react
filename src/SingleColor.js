import React, { useState, useEffect } from 'react'
import rgbToHex from './utilityComponent'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false)

  const rgbToString = rgb.join(',')
  const hex = rgbToHex(...rgb).toUpperCase()

  const handleClick = () => {
    setAlert(true)
    navigator.clipboard.writeText(hex)
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
        setAlert(false)
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [alert])

  return (
    <article
        className={`color ${index > 10 && 'color-light'}`}
        style={
            {backgroundColor: `rgb(${rgbToString})`}
        }
        onClick={handleClick}
    >
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>#{hex}</p>
        {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor