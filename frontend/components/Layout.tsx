import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }:any) => {
  return (
    <section className="h-full bg-gray-200 md:min-h-screen">
        <div className="min-h-full">
            <Navbar />
            { children }
        </div>
    </section>
  )
}

export default Layout
