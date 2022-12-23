import React from 'react'
import { useSelector } from 'react-redux';
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { selectUser } from '../../slices/userSlice';

const CaseStudy = ({caseStudy}:any) => {
  console.log(caseStudy)
  const user = useSelector(selectUser)

  if(!user) {
    window.location.href = "/"
  }

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
        <div className='my-6'>
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
    // <>
    //   {user && (
    //     <>
    //       <div className='mb-12'>
    //         <svg
    //           data-name="Layer 1"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 1440 320"
    //           preserveAspectRatio="none"
    //           className="svg absolute hidden lg:block"
    //           style={{height: '560px', width: '100%', zIndex: '-10', overflow: 'hidden'}}
    //         >
    //           <defs>
    //             <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
    //               <stop stop-color="hsl(217, 102%, 99%)" offset="0%"></stop>
    //               <stop stop-color="hsl(217, 88%, 93%)" offset="100%"></stop>
    //             </linearGradient>
    //           </defs>
    //           <path
    //             fill="url(#sw-gradient-0)"
    //             d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
    //           ></path>
    //         </svg>

    //         <div className="px-6 pt-20 md:px-12 text-gray-800 text-center lg:text-left">
    //           <div className="container mx-auto xl:px-32">
    //             <div className="grid lg:grid-cols-2 gap-12 items-center justify-start">
    //               <div className="mt-12 lg:mt-0 p-8">
    //                 <h1 className="text-6xl font-bold  tracking-tight mb-6">{heading}</h1>
    //                 <h1 className="text-3xl font-semibold text-emerald-500 tracking-tight mb-8">{subheading}</h1>
    //               </div>
    //               <div className="mb-12 lg:mb-0">
    //                 <img
    //                   src={featuredImage}
    //                   className="w-full rounded-lg shadow-lg"
    //                   alt=""
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="py-20">
    //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //           <div className="sm:text-center">
    //             <h2 className="text-lg font-semibold leading-8 text-emerald-600">Overview</h2>
    //             <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About this Case Study</p>
    //           </div>

    //           <div className="mt-6 max-w-lg sm:mx-auto md:max-w-none text-lg">
    //             {parse(cleanHTML)}
    //           </div>
    //         </div>
    //       </div>

    //       <div className="py-20">
    //         <div className="px-8">
    //           <div className="sm:text-center">
    //             <h2 className="text-lg font-semibold leading-8 text-emerald-600">Key Considerations</h2>
    //             <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How to benefit from this study</p>
    //           </div>

    //           <div className="mt-20 flex w-full">
    //             <div className="flex flex-1 p-16 flex-col justify-start items-start gap-8">

    //               {keyConsiderations.length > 0 && keyConsiderations.map((kc:any, index:any) => (
    //                 <div key={index} className="flex flex-row justify-start items-start gap-4">
    //                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white sm:shrink-0">
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    //                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    //                     </svg>
    //                   </div>
    //                   <div className="sm:min-w-0 sm:flex-1">
    //                     <p className="text-base font-semibold leading-8 text-gray-900">Consideration {index + 1}</p>
    //                     <p className="mt-2 text-lg leading-7 text-gray-600">{kc.value}</p>
    //                   </div>
    //                 </div>
    //               ))}

    //             </div>
    //             <div className='flex flex-1 p-8'>
    //               <img
    //                   src="https://res.cloudinary.com/dfs5xyvsv/image/upload/v1670518516/CoffeeTime_itm0jk.jpg"
    //                   className="w-full h-96 object-cover overflow-hidden rounded-lg shadow-lg"
    //                   alt=""
    //                 />
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="py-20">
    //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //           <div className="sm:text-center">
    //             <h2 className="text-lg font-semibold leading-8 text-emerald-600">Prompts</h2>
    //             <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Things to note</p>
    //           </div>

    //           <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
    //             <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-16">

    //               {prompts.length > 0 && prompts.map((prompt:any, index:any) => (
    //                 <div key={index} className="flex flex-col justify-start items-start">
    //                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-emerald-500 sm:shrink-0">
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //                       <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    //                     </svg>
    //                   </div>
    //                   <div className="sm:min-w-0 sm:flex-1">
    //                     <p className="text-base font-semibold leading-8 text-gray-900">Prompt {index + 1}</p>
    //                     <p className="text-lg mt-2 leading-7 text-gray-600">{prompt.value}</p>
    //                   </div>
    //                 </div>
    //               ))}

    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="py-20">
    //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //           <div className="sm:text-center">
    //             <h2 className="text-lg font-semibold leading-8 text-emerald-600">People</h2>
    //             <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who this can help</p>
    //           </div>

    //           <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
    //             <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-16">

    //               {people.length > 0 && people.map((people:any, index:any) => (
    //                 <div key={index} className="rounded-md flex flex-col flex-wrap justify-start items-center gap-4 p-4">
    //                   <img className="h-56 w-56 rounded-full object-cover p-4" src="https://res.cloudinary.com/dfs5xyvsv/image/upload/v1670518518/DSC_0594_oigd8e.jpg" alt="" />
    //                   <div className='text-lg font-semibold'>{people.value}</div>
    //                 </div>
    //               ))}

    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="py-20">
    //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //           <div className="sm:text-center">
    //             <h2 className="text-lg font-semibold leading-8 text-emerald-600">Datasheet</h2>
    //             <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Some of the data behind this study</p>
    //           </div>

    //           <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
    //             <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">

    //               {datasheet.length > 0 && datasheet.map((d:any, index:any) => (
    //                 <div key={index} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
    //                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white sm:shrink-0">
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //                       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    //                     </svg>
    //                   </div>
    //                   <div className="sm:min-w-0 sm:flex-1">
    //                     <p className="text-lg font-semibold leading-8 text-gray-900">{d.category}</p>
    //                     <p className="mt-2 text-base leading-7 text-gray-600">{d.details}</p>
    //                   </div>
    //                 </div>
    //               ))}

    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //     </>
    //   )}
    // </>
  )
}

const fetchCaseStudies = async () => {
    var requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
      };
      
    const response = await fetch("https://turing-case-studies-api.azurewebsites.net/api/cases", requestOptions)
    const result = await response.json()
    return result
}

const fetchCaseStudy = async (slug:any) => {
  var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    
  const response = await fetch(`https://turing-case-studies-api.azurewebsites.net/api/cases/casestudy/${slug}`, requestOptions)
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
