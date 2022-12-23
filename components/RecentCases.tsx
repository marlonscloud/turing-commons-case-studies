import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectUser } from '../slices/userSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecentCases = () => {
    const [cases, setCases] = useState<any[]>([])
    const user = useSelector(selectUser)

    useEffect(() => {
      const fetchCases = async () => {
        var requestOptions: RequestInit = {
            method: 'GET',
            redirect: 'follow'
          };
          
        const response = await fetch("https://turing-case-studies-api.azurewebsites.net/api/cases", requestOptions)
        const result = await response.json()
        console.log(result)
    
        setCases(result)
      }
      fetchCases()
    }, [])
    
    const notify = (message:string) => { toast.error(message, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleDelete = async(id:any) => {
        console.log(`Delete ${id}`)

        if(confirm("Are you sure you'd like to remove?") == true) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${user.token}`);
            myHeaders.append("Content-Type", "application/json");

            var requestOptions: RequestInit = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            };

            const response = await fetch(`http://localhost:5000/api/cases/${id}`, requestOptions)
            const { message, error } = await response.json()
            
            if(message) {
                setCases(cases.filter(x => x._id !== id))
                notify('Case Study Deleted')
            }
        }        
    }

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
                            <th scope="col" className="py-3 px-6"></th>
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
                                <td className="py-4 px-6" width={10}>
                                    <Link href={`/cases/${c._id}`}>
                                        <div className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </div>
                                    </Link>
                                </td>
                                <td className="py-4 px-6" width={10}>
                                    <Link href="#" onClick={() => handleDelete(c._id)}>
                                        <div className='font-medium text-red-600 dark:text-blue-500 hover:underline'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </div>
                                    </Link>
                                </td>
                                <td className="py-4 px-6" width={10}>
                                    <Link href={`/casestudy/${c.slug}`} target={'_blank'}>
                                        <div className='font-medium text-slate-300 hover:text-slate-400'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ToastContainer 
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}

export default RecentCases
