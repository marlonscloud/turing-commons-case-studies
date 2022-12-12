import { useEffect, useMemo, useState } from "react";
import { ErrorMessage, Field, FieldArray, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import Alert from "./Alert";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewCaseForm = () => {
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [tempSlug, setTempSlug] = useState('');
    
    const categories = ['Please select one','Analysis techniques', 'Available data']

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

    const setSlug = (text:string) => {
        let s = text.replaceAll(' ', '-').toLowerCase()
        return s
    }

    const submitNewCase = async(newCase:any) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${user.token}`);
        myHeaders.append("Content-Type", "application/json");

        var requestOptions:RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(newCase),
            redirect: 'follow'
        };

        const response = await fetch("http://localhost:5000/api/cases", requestOptions)
        const result = await response.json()
        return result
    }

    const formik = useFormik({
        initialValues: {
            heading: '',
            subheading: '',
            slug: '',
            featureImage: '',
            overview: '',
            keyConsiderations: [],
            people: [],
            prompts: [],
            datasheet: [
                {
                    category: '',
                    details: ''
                }
            ]
        },
        onSubmit: async() => {
            console.log(formik.values)
            const { heading, subheading, slug, featureImage, overview, keyConsiderations, people, prompts, datasheet } = formik.values
            /* TODO: 
                Create new case study object and pass to api 
                If 201 then show Success Else show error
            */
            const caseCreated = await submitNewCase({
                heading,
                subheading,
                slug: setSlug(heading),
                overview,
                keyConsiderations,
                prompts,
                datasheet,
                people,
                featuredImage: featureImage
            })

            if (caseCreated) {
                notify("New Case Successfully Added!")
                const navigateBack = () => {
                    window.location.href="/"
                }
                setTimeout(navigateBack, 3000);
            }
        },
        validationSchema: yup.object({
            // heading: yup.string().trim().required('Heading is required'),
            // subheading: yup.string().trim().required('Subheading is required'),
            // overview: yup.string().trim().required('Overview is required'),
            // keyConsiderations: yup.array().required('Please provide atleast one'),
            // people: yup.array().required('Please provide atleast one'),
            // prompts: yup.array().required('Please provide atleast one'),
        }),
    });

    return (
        <div className="w-full p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div hidden={!submitted}><Alert message={message} /></div>       
            
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-row w-full justify-start gap-4">
                    {/* Heading */}
                    <div className="mb-6 w-full">
                        <label htmlFor="heading" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Heading</label>
                        <input 
                            type="text" 
                            id="heading" 
                            className="shadow-sm bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            placeholder="" 
                            value={formik.values.heading}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.heading && formik.touched.heading ? (
                            <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.heading}</div>
                        ) : null}
                    </div>
                    {/* Slug */}
                    {/* <div className="mb-6 w-full">
                        <label htmlFor="slug" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
                        <input 
                            type="text" 
                            id="slug" 
                            className="shadow-sm bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            placeholder="" 
                            value={formik.values.slug}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.slug && formik.touched.slug ? (
                            <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.slug}</div>
                        ) : null}
                    </div> */}
                </div>

                <div className="flex flex-row w-full justify-start gap-4">
                    {/* Sub Heading */}
                    <div className="mb-6 w-full">
                        <label htmlFor="subheading" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sub Heading</label>
                        <input 
                            type="text" 
                            id="subheading" 
                            className="shadow-sm bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            placeholder="" 
                            value={formik.values.subheading}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.subheading && formik.touched.subheading ? (
                            <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.subheading}</div>
                        ) : null }
                    </div>
                    <div className="mb-6 w-full">
                        <label htmlFor="featureImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Feature Image Path</label>
                        <input 
                            type="text" 
                            id="featureImage" 
                            className="shadow-sm bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            placeholder="" 
                            value={formik.values.featureImage}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.featureImage && formik.touched.featureImage ? (
                            <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.featureImage}</div>
                        ) : null }
                    </div>

                </div>
                
                <div className="mb-6">
                    <label htmlFor="overview" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Overview</label>
                    <textarea 
                    id="overview" 
                    rows={6} 
                    className="shadow-sm bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                    placeholder=""
                    value={formik.values.overview}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {formik.errors.overview && formik.touched.overview ? (
                        <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.overview}</div>
                    ) : null }
                    {/* <RichTextEditor value={value} onChange={handleOnChange} className="h-64" /> */}
                </div>

                <div className="flex flex-row w-full justify-start gap-4">

                    <div className="flex flex-col w-1/2">
                        <div className='mb-6'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Key Considerations</label>
                            <div className="flex flex-row w-full justify-start items-center gap-4">
                                <FormikProvider value={formik}>
                                    <FieldArray name="keyConsiderations" render={({ insert, remove, push }) => (
                                        <div className="w-full">
                                        {formik.values.keyConsiderations.length > 0 &&
                                        formik.values.keyConsiderations.map((kc, index) => (
                                            <div className="flex justify-start items-center w-full" key={index}>
                                            <div className="w-full flex my-2">
                                                <Field
                                                name={`keyConsiderations.${index}.value`}
                                                placeholder=""
                                                type="text"
                                                className="shadow-sm flex-1 bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md p-2.5"
                                                />
                                                <ErrorMessage
                                                name={`keyConsiderations.${index}.value`}
                                                component="div"
                                                className="field-error"
                                                />
                                            </div>
                                            <div className="col">
                                                <button
                                                type="button"
                                                className="text-red-500 hover:bg-text-600 font-normal rounded-md text-sm px-5 py-2.5 text-center"
                                                onClick={() => remove(index)}
                                                >
                                                Remove
                                                </button>
                                            </div>
                                            </div>
                                        ))}
                                        <button
                                        type="button"
                                        className="text-slate-800 bg-slate-100 hover:bg-slate-200 font-normal rounded-md text-sm px-4 py-2 my-2 text-center"
                                        onClick={() => push({ value: '' })}
                                        >
                                        Add
                                        </button>
                                    </div>
                                    )}/>
                                </FormikProvider>
                            </div>
                            {formik.errors.keyConsiderations && (
                                <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.keyConsiderations}</div>
                            )}
                        </div>
                        <div className='mb-6'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prompts</label>
                            <div className="flex flex-row w-full justify-start items-center gap-4">
                                <FormikProvider value={formik}>
                                    <FieldArray name="prompts" render={({ insert, remove, push }) => (
                                        <div className="w-full">
                                        {formik.values.prompts.length > 0 &&
                                        formik.values.prompts.map((p, index) => (
                                            <div className="flex justify-start items-center w-full" key={index}>
                                            <div className="w-full flex my-2">
                                                <Field
                                                name={`prompts.${index}.value`}
                                                placeholder=""
                                                type="text"
                                                className="shadow-sm flex-1 bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md p-2.5"
                                                />
                                                <ErrorMessage
                                                name={`prompts.${index}.value`}
                                                component="div"
                                                className="field-error"
                                                />
                                            </div>
                                            <div className="col">
                                                <button
                                                type="button"
                                                className="text-red-500 hover:bg-text-600 font-normal rounded-md text-sm px-5 py-2.5 text-center"
                                                onClick={() => remove(index)}
                                                >
                                                Remove
                                                </button>
                                            </div>
                                            </div>
                                        ))}
                                        <button
                                        type="button"
                                        className="text-slate-800 bg-slate-100 hover:bg-slate-200 font-normal rounded-md text-sm px-4 py-2 my-2 text-center"
                                        onClick={() => push({ value: '' })}
                                        >
                                        Add
                                        </button>
                                    </div>
                                    )}/>
                                </FormikProvider>
                            </div>
                            {formik.errors.prompts && (
                                <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.prompts}</div>
                            )}
                        </div>
                        <div className='mb-6'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">People</label>
                            <div className="flex flex-row w-full justify-start items-center gap-4">
                                <FormikProvider value={formik}>
                                    <FieldArray name="people" render={({ insert, remove, push }) => (
                                        <div className="w-full">
                                        {formik.values.people.length > 0 &&
                                        formik.values.people.map((p, index) => (
                                            <div className="flex justify-start items-center w-full" key={index}>
                                            <div className="w-full flex my-2">
                                                <Field
                                                name={`people.${index}.value`}
                                                placeholder=""
                                                type="text"
                                                className="shadow-sm flex-1 bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md p-2.5"
                                                />
                                                <ErrorMessage
                                                name={`people.${index}.value`}
                                                component="div"
                                                className="field-error"
                                                />
                                            </div>
                                            <div className="col">
                                                <button
                                                type="button"
                                                className="text-red-500 hover:bg-text-600 font-normal rounded-md text-sm px-5 py-2.5 text-center"
                                                onClick={() => remove(index)}
                                                >
                                                Remove
                                                </button>
                                            </div>
                                            </div>
                                        ))}
                                        <button
                                        type="button"
                                        className="text-slate-800 bg-slate-100 hover:bg-slate-200 font-normal rounded-md text-sm px-4 py-2 my-2 text-center"
                                        onClick={() => push({ value: '' })}
                                        >
                                        Add
                                        </button>
                                    </div>
                                    )}/>
                                </FormikProvider>
                            </div>
                            {formik.errors.people && (
                                <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.people}</div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col w-1/2">
                        <div className='mb-6'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Datasheet</label>
                            <div className="flex flex-row w-full justify-start items-center gap-4">
                                <FormikProvider value={formik}>
                                    <FieldArray name="datasheet" render={({ insert, remove, push }) => (
                                        <div className="w-full">
                                        {formik.values.datasheet.length > 0 &&
                                        formik.values.datasheet.map((d, index) => (
                                            <div className="flex justify-start items-start w-full mb-4" key={index}>
                                            <div className="w-full flex flex-col gap-2">
                                                {/* <label htmlFor={`${d.category}_${index}`} className="text-xs uppercase font-semibold tracking-wide text-gray-500">Category</label> */}
                                                <Field 
                                                    name={`datasheet.${index}.category`} 
                                                    as="select"
                                                    className="bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md block p-2.5">
                                                    {categories.map((cat, index) => (
                                                        <option key={index} value={cat}>{cat}</option>
                                                    ))}
                                                </Field>
                                                <Field
                                                    name={`datasheet.${index}.details`}
                                                    placeholder=""
                                                    as="textarea"
                                                    rows={6}
                                                    className="shadow-sm flex-1 bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md p-2.5"
                                                />
                                                <ErrorMessage
                                                name={`datasheet.${index}.details`}
                                                component="div"
                                                className="field-error"
                                                />
                                            </div>
                                            <div className="col">
                                                <button
                                                type="button"
                                                className="text-red-500 hover:bg-text-600 font-normal rounded-md text-sm px-5 py-2.5 text-center"
                                                onClick={() => remove(index)}
                                                >
                                                Remove
                                                </button>
                                            </div>
                                            </div>
                                        ))}
                                        <button
                                        type="button"
                                        className="text-slate-800 bg-slate-100 hover:bg-slate-200 font-normal rounded-md text-sm px-4 py-2 my-2 text-center"
                                        onClick={() => push({ category: '', text: '' })}
                                        >
                                        Add
                                        </button>
                                    </div>
                                    )}/>
                                </FormikProvider>
                            </div>
                            {/* {formik.errors.datasheet && (
                                <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.datasheet}</div>
                            )} */}
                        </div>
                    </div>

                </div>
                
                <div className='flex gap-2 py-4'>
                    <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit Case Study</button>
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

export default NewCaseForm
