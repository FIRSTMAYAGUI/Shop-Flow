import React from 'react'

const SectionTitle = ({ children }:{ children: React.ReactNode }) => {
  return (
    <h2 className='text-5xl font-medium text-primary-color'>
      {children}
    </h2>
  )
}

export default SectionTitle
