import React from 'react'

function Header({children}: {children: React.ReactNode}) {
  return (
    <header className="w-full text-4xl bg-[url(./assets/brunette-haired-woman-smiling.jpg)] bg-cover bg-center h-screen relative before:absolute before:bg-[#4746466b] before:w-full before:h-full">
      {
        children
      }
    </header>
  )
}

export default Header
