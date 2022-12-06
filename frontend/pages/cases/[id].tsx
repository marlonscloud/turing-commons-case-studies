import Link from 'next/link';
import React from 'react'
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';

const CaseStudy = ({caseStudy}:any) => {
  const categories = [
    'Analysis techniques',
    'Available data'
  ]
  return (
    <Layout>
      <Header heading={caseStudy.heading} subheading="Editing" back={true} />
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
                  value={caseStudy.heading}
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
                  value={caseStudy.heading}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="overview" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Overview</label>
                <textarea 
                  id="overview" 
                  rows={6} 
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Write your thoughts here..."
                  value={caseStudy.overview}
                />
              </div>
              <div className='mb-6'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Key Considerations</label>
                {caseStudy.keyConsiderations.map((k:any, i:number) => (
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
                ))}
              </div>
              <div className='mb-6'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prompts</label>
                {caseStudy.prompts.map((p:any, i:number) => (
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
                ))}
              </div>
              <div className='mb-6'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">People</label>
                {caseStudy.people.map((p:any, i:number) => (
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
                ))}
              </div>
              <div className='mb-6'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Datasheet</label>
                {caseStudy.datasheet.map((d:any, i:number) => (
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
                ))}
              </div>
              
              <div className='flex gap-2 py-4'>
                <Link href="/" className="text-black bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</Link>
                <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button>
              </div>
            </form>

          </div>
        </div>
      </main>
    </Layout>
  )
}

const fetchCaseStudies = async () => {
    var requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
      };
      
    const response = await fetch("http://localhost:5000/api/cases", requestOptions)
    const result = await response.json()
    return result
}

const fetchCaseStudy = async (id:any) => {
  var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    
  const response = await fetch(`http://localhost:5000/api/cases/${id}`, requestOptions)
  const result = await response.json()
  return result
}

export const getStaticPaths = async () => {  
    const cases = await fetchCaseStudies()
    const paths = cases.map((c: { _id: any; }) => ({
        params: {
            id: c._id
        }
    }))

    return {
        paths, 
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { id }}:any) => {
  const caseStudy = await fetchCaseStudy(id)

  return {
    props: { caseStudy }
  }
}

export default CaseStudy
