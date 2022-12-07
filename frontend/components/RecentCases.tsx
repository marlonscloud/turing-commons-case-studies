import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'

const RecentCases = () => {
    const [cases, setCases] = useState([])

    useEffect(() => {
      const fetchCases = async () => {
        var requestOptions: RequestInit = {
            method: 'GET',
            redirect: 'follow'
          };
          
        const response = await fetch("http://localhost:5000/api/cases", requestOptions)
        const result = await response.json()
        console.log(result)
    
        setCases(result)
      }
      fetchCases()
    }, [])
    
    
  return (
    <div className="w-full p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        
        <div className="overflow-x-auto relative sm:rounded-lg">
            {/* <div className="flex justify-between items-center pb-4 mb-2">
                <h1 className='text-lg'>Recent Case Studies</h1>

                <div className='flex flex-row justify-center items-center gap-4'>
                    <label className="sr-only">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                    </div>
                    <Link href={`/cases/new`}>
                        <div className='flex justify-start items-center gap-2 text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        New Case Study
                        </div>
                    </Link>
                </div>
            </div> */}
            {/* Case Study Table */}
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Heading
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Sub Heading
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Updated
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Created
                        </th>
                        <th scope="col" className="py-3 px-6"></th>
                    </tr>
                </thead>
                <tbody>
                    {cases.length > 0 && cases.map((c:any, i) => (
                        <tr key={i} className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex justify-start items-center gap-4'>
                                    <div className="flex-shrink-0">
                                        <img className="block w-16 h-12 object-cover rounded-sm bg-slate-200" src={c.featuredImage} />
                                    </div>
                                    {c.heading}
                                </div>
                            </th>
                            <td className="py-4 px-6">
                                {c.subheading}
                            </td>
                            <td className="py-4 px-6">
                                {moment(c.updatedAt).format('DD/MM/YYYY')}
                            </td>
                            <td className="py-4 px-6">
                                {moment(c.createdAt).format('DD/MM/YYYY')}
                            </td>
                            <td className="py-4 px-6">
                                <Link href={`/cases/${c._id}`}>
                                    <div className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                                        Edit
                                    </div>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Recent Case Studies</h5>
            <a href="#" className="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-500">
                Add New
            </a>
        </div>
        <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {cases.length > 0 && cases.map((item: any) => (
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <span className="block w-8 h-8 rounded-full bg-slate-200"></span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {item.heading}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {item.subheading}
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $320
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
        </div> */}
    </div>
  )
}

export default RecentCases
