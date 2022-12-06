import Link from 'next/link'
import React from 'react'

const Header = ({ heading, subheading, back }:any) => {
  return (
    <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex gap-8 justify-start items-center">
            {back && (<div className="flex bg-slate-50 hover:bg-slate-100 hover: cursor-pointer p-2 rounded-md">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg> */}
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </Link>
            </div>
            )}

            <div>
                <p className='text-xs tracking-widest uppercase mb-1'>{subheading}</p>
                <h1 className="text-2xl font-normal tracking-tight text-gray-900">{heading}</h1>
            </div>
        </div>
    </header>
  )
}

export default Header
