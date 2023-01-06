import { useState } from "react";
import { ErrorMessage, Field, FieldArray, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import Alert from "./Alert";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css'
import dynamic from "next/dynamic";
import parser from 'html-react-parser'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

const UpdateCaseForm = ({ caseStudy }:any) => {
    const { _id, heading, subheading, slug, featuredImage, overview, keyConsiderations, people, prompts, datasheet } = caseStudy
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(false);
    const [value, setValue] = useState('');
    const apiUrl:any = process.env.NEXT_PUBLIC_API_URL
    
    const categories = ['Please select one','Analysis techniques', 'Available data']

    const  modules  = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script:  "sub" }, { script:  "super" }],
            ["blockquote", "code-block"],
            [{ list:  "ordered" }, { list:  "bullet" }],
            [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

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
        console.log('New Slug |', s)
        return s
    }

    const updateCase = async(newCase:any) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${user.token}`);
        myHeaders.append("Content-Type", "application/json");

        var requestOptions: RequestInit = {
            method: 'PUT',
            headers: myHeaders,
            body: JSON.stringify(newCase),
            redirect: 'follow'
        };

        const response = await fetch(`${apiUrl}/cases/${_id}`, requestOptions)
        const result = await response.json()
        return result          
    }

    const formik = useFormik({
        initialValues: {
            heading: heading,
            subheading: subheading,
            slug: slug,
            featureImage: featuredImage,
            overview: overview,
            keyConsiderations: keyConsiderations,
            people: people,
            prompts: prompts,
            datasheet: datasheet
        },
        onSubmit: async() => {
            console.log(formik.values)
            const { heading, subheading, featureImage, overview, keyConsiderations, people, prompts, datasheet } = formik.values

            const newCaseDetails = {
                heading,
                subheading,
                slug: setSlug(heading),
                overview,
                keyConsiderations,
                prompts,
                datasheet,
                people,
                featuredImage: featureImage
            }

            const caseUpdated = await updateCase(newCaseDetails)

            if (caseUpdated) {
                notify("Case Updated Successfully!")                
                const navigateBack = () => {
                    window.location.href="/"
                }    
                setTimeout(navigateBack, 3000);
            }
        },
        validationSchema: yup.object({
            heading: yup.string().required('Heading is required'),
            subheading: yup.string().required('Subheading is required'),
            overview: yup.string().required('Overview is required'),
            keyConsiderations: yup.array().required('Please provide atleast one'),
            people: yup.array().required('Please provide atleast one'),
            prompts: yup.array().required('Please provide atleast one'),
        }),
    });

    return (
        <>
            <div hidden={!updated}><Alert message={message} /></div>       
            
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-row w-full justify-start gap-4 mb-4">
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
                            <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.heading.toString()}</div>
                        ) : null}
                    </div>
                </div>

                <div className="flex flex-row w-full justify-start gap-4 mb-4">
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
                            <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.subheading.toString()}</div>
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
                            <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.featureImage.toString()}</div>
                        ) : null }
                    </div>

                </div>
                
                {/* <div className="mb-6">
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
                        <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.overview.toString()}</div>
                    ) : null }
                </div> */}

                <div className="mb-12">
                    <label htmlFor="overview" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Overview</label>
                    <FormikProvider value={formik}>
                        <Field name="overview">
                            {({field}:any) => <QuillNoSSRWrapper  
                                modules={modules} theme="snow" value={field.value} onChange={field.onChange(field.name)} placeholder="Content goes here..."
                            />}
                        </Field>
                    </FormikProvider>
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
                                        formik.values.keyConsiderations.map((k:any, index:any) => (
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
                                <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.keyConsiderations.toString()}</div>
                            )}
                        </div>
                        <div className='mb-6'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prompts</label>
                            <div className="flex flex-row w-full justify-start items-center gap-4">
                                <FormikProvider value={formik}>
                                    <FieldArray name="prompts" render={({ insert, remove, push }) => (
                                        <div className="w-full">
                                        {formik.values.prompts.length > 0 &&
                                        formik.values.prompts.map((p:any, index:any) => (
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
                                <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.prompts.toString()}</div>
                            )}
                        </div>
                        <div className='mb-6'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">People</label>
                            <div className="flex flex-row w-full justify-start items-center gap-4">
                                <FormikProvider value={formik}>
                                    <FieldArray name="people" render={({ insert, remove, push }) => (
                                        <div className="w-full">
                                        {formik.values.people.length > 0 &&
                                        formik.values.people.map((p:any, index:any) => (
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
                                <div className="text-red-500 text-sm py-2 font-semibold">{formik.errors.people.toString()}</div>
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
                                        formik.values.datasheet.map((d:any, index:any) => (
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
                                                {/* <Field
                                                    name={`datasheet.${index}.details`}
                                                    placeholder=""
                                                    as="textarea"
                                                    rows={6}
                                                    className="shadow-sm flex-1 bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-md p-2.5"
                                                /> */}
                                                <Field name={`datasheet.${index}.details`}>
                                                    {({field}:any) => <QuillNoSSRWrapper  
                                                        modules={modules} theme="snow" value={field.value} onChange={field.onChange(field.name)} placeholder="Content goes here..."
                                                    />}
                                                </Field>
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
                    <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update Case Study</button>
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
            </form>
        </>
    )
}

export default UpdateCaseForm
