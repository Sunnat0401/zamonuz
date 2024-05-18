import React from 'react'
const Button = ({borderRadius,width , height, color, bg,  border='2px solid #22B3C1'}) => {
  const styleComp = {
    borderRadius: borderRadius ,
    border: border ,
    color:color ,
    width: width,
    height:height,
    background: bg,
  }
  return (
    <button style={styleComp}>Button</button>
  )
}

export default Button