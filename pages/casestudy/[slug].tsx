import React from 'react'
import { useSelector } from 'react-redux';
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { selectUser } from '../../slices/userSlice';

const CaseStudy = ({caseStudy}:any) => {
  console.log(caseStudy)
  const user = useSelector(selectUser)

  // if(!user) {
  //   window.location.href = "/"
  // }

  const { heading, subheading, overview, featuredImage, keyConsiderations, prompts, people, datasheet } = caseStudy[0]

  const cleanOverview = DOMPurify.sanitize(overview, {
    USE_PROFILES: { html: true },
  });

  datasheet.map((data:any, index:any) => {
    const cleanDatasheet = DOMPurify.sanitize(data.details, {
      USE_PROFILES: { html: true },
    });
    data.details = cleanDatasheet
  })
  

  return (
    <>
          <div className="bg-slate-800 relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
              <svg
                className="absolute left-0 hidden h-full text-slate-800 transform -translate-x-1/2 lg:block"
                viewBox="0 0 100 100"
                fill="currentColor"
                preserveAspectRatio="none slice"
              >
                <path d="M50 0H100L50 100H0L50 0Z" />
              </svg>
              <img
                className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                src={featuredImage}
                alt=""
              />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
              <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                <div className='text-slate-100 text-2xl font-bold -mt-6 sm:-mt-24 mb-16'>
                <h1>The <br/><span className='ml-6'>Alan Turing</span><br/> Institute</h1>
                </div>
                <h2 className="mb-5 font-sans text-5xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                  {heading}
                </h2>
                <p className="pr-5 mb-5 text-base text-slate-200 md:text-lg">
                  {subheading}
                </p>
                {/* <div className="flex items-center">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-emerald-400 hover:bg-emerald-700 focus:shadow-outline focus:outline-none"
                  >
                    Get started
                  </a>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-emerald-700"
                  >
                    Learn more
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div id="overview" className='bg-slate-100'>
            <div className="p-16">
              <div className="">
                <div className="text-left">
                  <p className="mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">Overview</p>
                </div>
                <div className="mt-6 max-w-lg sm:mx-auto md:max-w-none text-lg">
                  {parse(cleanOverview)}
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-full flex-wrap'>
            <div id="KeyConsiderations" className='w-full sm:w-1/2 p-16 bg-slate-600 text-white'>
              <p className="text-2xl font-bold tracking-tight">Key Considerations</p>
              <div className='py-6'>
                {keyConsiderations.length > 0 && keyConsiderations.map((kc:any, index:any) => (
                  <div key={index} className="flex flex-row justify-start items-start gap-4 my-6">
                    <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500 text-white sm:shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    </div>
                    <div className="sm:min-w-0 sm:flex-1 text-white">
                      <p className="text-lg leading-7">{kc.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="DeliberativePrompts" className='w-full sm:w-1/2 p-16 bg-slate-800 text-white'>
              <p className="text-2xl font-bold tracking-tight">Deliberative Prompts</p>
              <div className='py-6'>
                {prompts.length > 0 && prompts.map((prompt:any, index:any) => (
                  <div key={index} className="flex flex-row justify-start items-start gap-4 my-6">
                    <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white sm:shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex text-white justify-start items-start">
                      <p className="text-lg leading-7">{prompt.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-row-reverse w-full flex-wrap'>
            <div className='w-full sm:w-1/2 text-white flex flex-col justify-start items-start'>
              <div className='w-full bg-white text-black'>
                <img
                  className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
              <div id="People" className='w-full flex-1 p-16 bg-slate-600 text-white'>
                <p className="text-2xl font-bold tracking-tight">Groups, Organisations and Affected individuals</p>
                <div className='py-6'>
                  {people.length > 0 && people.map((p:any, index:any) => (
                    <div key={index} className="flex flex-row justify-start items-start gap-4 my-6">
                      <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white sm:shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex sm:min-w-0 text-white justify-start items-center gap-4">
                        <p className="text-lg mt-1">{p.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div id="Datasheet" className='w-full sm:w-1/2 p-2 sm:p-16 bg-slate-100 text-slate-800'>
              <div className='bg-slate-200 rounded-md shadow-xl p-4 sm:p-6'>
                <p className="text-2xl font-bold tracking-tight">Datasheet</p>
                <div className="overflow-x-auto mt-4">
                    <table className="w-full text-sm text-left">
                        <thead className="text-lg text-slate-800">
                            <tr className=''>
                                <th scope="col" className="py-3 px-6">
                                    Category
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {datasheet.length > 0 && datasheet.map((d:any, index:any) => (
                          <tr className="text-slate-800 text-lg">
                              <th scope="row" className="py-4 px-6 text-left font-normal text-slate-700 italic">
                                  {d.category}
                              </th>
                              <td className="py-4 px-6">
                                {parse(d.details)}
                              </td>
                          </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
        </>
  )
}

const fetchCaseStudies = async () => {
    let apiUrl = process.env.NEXT_PUBLIC_API_URL
    var requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
      };
      
    const response = await fetch(`${apiUrl}/cases`, requestOptions)
    const result = await response.json()
    return result
}

const fetchCaseStudy = async (slug:any) => {
  let apiUrl = process.env.NEXT_PUBLIC_API_URL
  var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    
  const response = await fetch(`${apiUrl}/cases/casestudy/${slug}`, requestOptions)
  const result = await response.json()
  return result
}

export const getStaticPaths = async () => {  
    const cases = await fetchCaseStudies()
    const paths = cases.map((c: { slug: any; }) => ({
        params: {
            slug: c.slug
        }
    }))

    return {
        paths, 
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}:any) => {
  const caseStudy = await fetchCaseStudy(slug)

  return {
    props: { caseStudy }
  }
}

export default CaseStudy
