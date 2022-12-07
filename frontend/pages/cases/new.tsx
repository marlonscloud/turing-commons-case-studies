import Layout from "../../components/Layout";
import Link from "next/link";
import Header from "../../components/Header";
import TextEditor from "../../components/TextEditor";
import RichTextEditor from "react-rte";
import { useState } from "react";

export default function NewCase() {  
    const categories = ['Analysis techniques', 'Available data']
    const [value, setValue] = useState(RichTextEditor.createEmptyValue());

    const handleOnChange = (value: any) => {
        setValue(value);
        console.log(value.toString('html'));
    }

    return (
        <Layout>
            <Header heading="Case Study" subheading="New" back={true} />
            <main>
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex justify-start gap-4 flex-wrap">
                <div className="w-full p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">              
                    <form>
                    <div className="mb-6">
                        <label htmlFor="heading" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Heading</label>
                        <input 
                        type="text" 
                        id="heading" 
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                        placeholder="" 
                        required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subheading" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sub Heading</label>
                        <input 
                        type="text" 
                        id="subheading" 
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                        placeholder="" 
                        required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="overview" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Overview</label>
                        {/* <textarea 
                        id="overview" 
                        rows={6} 
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder=""
                        /> */}
                        <RichTextEditor value={value} onChange={handleOnChange} className="h-64" />
                    </div>
                    <div className='mb-6'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Key Considerations</label>
                        <div className="flex flex-row justify-start items-center gap-4">
                            <input 
                                type="text" 
                                id="subheading" 
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                                placeholder="Enter a key consideration..."
                            />
                            <button type="button" className="text-slate-900 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add</button>
                        </div>

                        {/* {caseStudy.keyConsiderations.map((k:any, i:number) => (
                        <div key={i}>
                            <input 
                            type="text" 
                            id={k} 
                            className="shadow-sm mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            placeholder="" 
                            required
                            value={k}
                            />
                        </div>
                        ))} */}
                    </div>
                    <div className='mb-6'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prompts</label>
                        <div className="flex flex-row justify-start items-center gap-4">
                            <input 
                                type="number" 
                                id="prompt_order" 
                                className="shadow-sm w-1/8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                                placeholder="Order"
                                min={0}
                                max={10}
                            />
                            <input 
                                type="text" 
                                id="prompt_text" 
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                                placeholder="Enter a Prompt..."
                            />
                            <button type="button" className="text-slate-900 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add</button>
                        </div>
                        
                        {/* {caseStudy.prompts.map((p:any, i:number) => (
                        <div key={i}>
                            <input 
                            type="text" 
                            id={p.id} 
                            className="shadow-sm mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            placeholder="" 
                            required
                            value={p.text}
                            />
                        </div>
                        ))} */}
                    </div>
                    <div className='mb-6'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">People</label>
                        <div className="flex flex-row justify-start items-center gap-4">
                            <input 
                                type="number" 
                                id="people_order" 
                                className="shadow-sm w-1/8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                                placeholder="Order"
                                min={0}
                                max={10}
                            />
                            <input 
                                type="text" 
                                id="people_text" 
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                                placeholder="Enter a type of person..."
                            />
                            <button type="button" className="text-slate-900 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add</button>
                        </div>
                        
                        {/* {caseStudy.people.map((p:any, i:number) => (
                        <div key={i}>
                            <input 
                            type="text" 
                            id={p.id} 
                            className="shadow-sm mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                            placeholder="" 
                            required
                            value={p.text}
                            />
                        </div>
                        ))} */}
                    </div>
                    <div className='mb-6'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Datasheet</label>
                        <div className="flex flex-row justify-start items-start gap-4">
                            <select id="categories" className="bg-gray-50 border w-1/3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {categories.map((cat, index) => (
                                    <option key={index}>{cat}</option>
                                ))}
                            </select>
                            <textarea 
                                id="datasheet_row" 
                                rows={6} 
                                className="block mb-6 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder=""
                            />
                            <button type="button" className="text-slate-900 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add</button>
                        </div>
                        
                        {/* {caseStudy.datasheet.map((d:any, i:number) => (
                        <div key={i} className='flex flex-col items-center gap-2 justify-start'>
                            <select id="categories" value={d.cateogry} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {categories.map((cat, index) => (
                                <option key={index}>{cat}</option>
                            ))}
                            </select>
                            <textarea 
                            id={d._id} 
                            rows={6} 
                            className="block mb-6 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Write your thoughts here..."
                            value={d.details}
                            />
                        </div>
                        ))} */}
                    </div>
                    
                    <div className='flex gap-2 py-4'>
                        <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit Case Study</button>
                    </div>
                    </form>

                </div>
                </div>
            </main>
            </Layout>
    )
}
