import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../slices/userSlice'
import Header from './Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserManagement = () => {
    const [users, setUsers] = useState<any[]>([])

    const user = useSelector(selectUser)

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

            const response = await fetch(`https://turing-case-studies-api.azurewebsites.net/api/users/${id}`, requestOptions)
            const { message, error } = await response.json()
            
            if(message) {
                setUsers(users.filter(x => x._id !== id))
                notify('User Deleted')
            }
        }        
    }

    const btn = { link: '/users/new', text: 'Add New' }

    useEffect(() => {
        const fetchUsers = async () => {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${user.token}`);
            
            var requestOptions: RequestInit = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };
            
            const response = await fetch("https://turing-case-studies-api.azurewebsites.net/api/users", requestOptions)
            const result = await response.json()
            setUsers(result)
        }
        fetchUsers()
      }, [])

    return (
        <>
        <Header heading="Users" back={false} btn={btn} />
        <main>
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex justify-start gap-4 flex-wrap">
                <div className="w-full p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    
                    <div className="overflow-x-auto relative sm:rounded-lg">

                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Roles
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Updated
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Created
                                    </th>
                                    <th scope="col" className="py-3 px-6"></th>
                                    <th scope="col" className="py-3 px-6"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 && users.map((user:any, i) => (
                                    <tr key={i} className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <div className='flex justify-start items-center gap-4'>
                                                <div className="flex-shrink-0">
                                                    <img className="block w-12 h-12 object-cover rounded-full bg-slate-200" src={user.imageUrl} />
                                                </div>
                                                <div className='flex flex-col justify-start items-start'>
                                                    <div>{user.name}</div>
                                                    <div className='text-sm font-normal text-slate-400'>{user.email}</div>
                                                </div>
                                            </div>
                                        </th>
                                        <td className="py-4 px-6">
                                            {user.roles && user.roles.join(', ')}
                                        </td>
                                        <td className="py-4 px-6">
                                            {moment(user.updatedAt).format('DD/MM/YYYY')}
                                        </td>
                                        <td className="py-4 px-6">
                                            {moment(user.createdAt).format('DD/MM/YYYY')}
                                        </td>
                                        <td className="py-4 px-6" width={10}>
                                            <Link href={`/users/${user._id}`}>
                                                <div className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className="py-4 px-6" width={10}>
                                            <Link href="#" onClick={() => handleDelete(user._id)}>
                                                <div className='font-medium text-red-600 dark:text-blue-500 hover:underline'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
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
            </div>
        </main>
        </>
    )
}

export default UserManagement
