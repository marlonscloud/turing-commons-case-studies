import { useEffect, useState } from "react";
import { Field, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewUserForm = () => {
    const user = useSelector(selectUser)   

    const notify = (message:string) => { toast.success(message, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }  

    const submitNewUser = async(newUser:any) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(newUser),
            redirect: 'follow'
        };

        const response = await fetch("https://turing-case-studies-api.azurewebsites.net/api/users", requestOptions)
        const result = await response.json()
        return result
    }

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            roles: [],
            imageUrl: ''
        },
        onSubmit: async() => {
            const { fullname, email, password, roles, imageUrl } = formik.values
            
            const userCreated = await submitNewUser({
                name: fullname,
                email,
                password,
                roles, 
                imageUrl
            })

            if (userCreated) {
                notify("New User Successfully Added!")
                const navigateBack = () => {
                    window.location.href="/users"
                }
                setTimeout(navigateBack, 3000);
            }
        },
        validationSchema: yup.object({
            fullname: yup.string().trim().required('Fullname is required'),
            email: yup.string().trim().required('Email Address is required'),
            password: yup.string().trim().required('Password is required'),
            imageUrl: yup.string().trim().required('Profile Image Url is required'),
        }),
    });

    return (
        <div className="w-full p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-row w-full justify-start gap-4">
                    <div className="mb-6 w-full">
                        <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fullname</label>
                        <input 
                            type="text" 
                            id="fullname" 
                            className="shadow-sm bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            placeholder="" 
                            value={formik.values.fullname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.fullname && formik.touched.fullname ? (
                            <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.fullname}</div>
                        ) : null}
                    </div>
                    <div className="mb-6 w-full">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input 
                            type="text" 
                            id="password" 
                            className="shadow-sm bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            placeholder="" 
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.password && formik.touched.password ? (
                            <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.password}</div>
                        ) : null}
                    </div>
                </div>

                <div className="flex flex-row w-full justify-start gap-4">
                    {/* Email */}
                    <div className="mb-6 w-full">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                        <input 
                            type="text" 
                            id="email" 
                            className="shadow-sm bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            placeholder="" 
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email ? (
                            <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.email}</div>
                        ) : null }
                    </div>
                    <div className="mb-6 w-full">
                        <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Image</label>
                        <input 
                            type="text" 
                            id="imageUrl" 
                            className="shadow-sm bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            placeholder="" 
                            value={formik.values.imageUrl}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.imageUrl && formik.touched.imageUrl ? (
                            <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.imageUrl}</div>
                        ) : null }
                    </div>

                </div>

                <div className="flex flex-col w-full justify-start gap-4">
                    
                    <h3 className="font-semibold text-gray-900 dark:text-white">Roles</h3>

                    <FormikProvider value={formik}>
                        <ul role="group" aria-labelledby="checkbox-group" className="flex justify-center items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <Field id="full-admin" type="checkbox" name="roles" value="Full Admin" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="full-admin" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Full Admin</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <Field id="admin" type="checkbox" name="roles" value="Admin" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="admin" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Admin</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <Field id="editor" type="checkbox" name="roles" value="Editor" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="editor" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Editor</label>
                                </div>
                            </li>
                            <li className="w-full dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <Field id="viewer" type="checkbox" name="roles" value="Viewer" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label htmlFor="viewer" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Viewer</label>
                                </div>
                            </li>
                        </ul>
                    </FormikProvider>

                </div>
                
                <div className='flex gap-2 py-4'>
                    <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add User</button>
                </div>

                <ToastContainer 
                    position="bottom-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </form>

        </div>
    )
}

export default NewUserForm
