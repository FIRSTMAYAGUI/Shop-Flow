import React from 'react'

function Button({className, children} : {className?: string, children: React.ReactNode}) {
  return (
    <button className={className || 'btn'}>
        { children }
    </button>
  )
}

export default Button
