import React from 'react'

const SectionTitle = ({ children, className }:{ children: React.ReactNode, className?: string }) => {
  return (
    <h2 className={`text-5xl font-bold text-primary-color ${className}`}>
      {children}
    </h2>
  )
}

export default SectionTitle
