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

  const cleanHTML = DOMPurify.sanitize(overview, {
    USE_PROFILES: { html: true },
  });

  return (
    <>
      {user && (
        <>
          <div className='mb-12'>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="svg absolute hidden lg:block"
              style={{height: '560px', width: '100%', zIndex: '-10', overflow: 'hidden'}}
            >
              <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                  <stop stop-color="hsl(217, 102%, 99%)" offset="0%"></stop>
                  <stop stop-color="hsl(217, 88%, 93%)" offset="100%"></stop>
                  {/* <stop stop-color="hsl(159.88,102%,99%)" offset="0%"></stop>
                  <stop stop-color="hsl(159.88,88%,93%)" offset="100%"></stop> */}
                </linearGradient>
              </defs>
              <path
                fill="url(#sw-gradient-0)"
                d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
              ></path>
            </svg>

            <div className="px-6 pt-20 md:px-12 text-gray-800 text-center lg:text-left">
              <div className="container mx-auto xl:px-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center justify-start">
                  <div className="mt-12 lg:mt-0 p-8">
                    <h1 className="text-6xl font-bold  tracking-tight mb-6">{heading}</h1>
                    <h1 className="text-3xl font-semibold text-emerald-500 tracking-tight mb-8">{subheading}</h1>
                    {/* <a className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                    <a className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a> */}
                  </div>
                  <div className="mb-12 lg:mb-0">
                    <img
                      src={featuredImage}
                      className="w-full rounded-lg shadow-lg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="sm:text-center">
                <h2 className="text-lg font-semibold leading-8 text-emerald-600">Overview</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About this Case Study</p>
              </div>

              <div className="mt-6 max-w-lg sm:mx-auto md:max-w-none text-lg">
                {parse(cleanHTML)}
              </div>
            </div>
          </div>

          <div className="py-20">
            <div className="px-8">
              <div className="sm:text-center">
                <h2 className="text-lg font-semibold leading-8 text-emerald-600">Key Considerations</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How to benefit from this study</p>
              </div>

              <div className="mt-20 flex w-full">
                <div className="flex flex-1 p-16 flex-col justify-start items-start gap-8">

                  {keyConsiderations.length > 0 && keyConsiderations.map((kc:any, index:any) => (
                    <div key={index} className="flex flex-row justify-start items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white sm:shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                      </div>
                      <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-base font-semibold leading-8 text-gray-900">Consideration {index + 1}</p>
                        <p className="mt-2 text-lg leading-7 text-gray-600">{kc.value}</p>
                      </div>
                    </div>
                  ))}

                </div>
                <div className='flex flex-1 p-8'>
                  <img
                      src="https://res.cloudinary.com/dfs5xyvsv/image/upload/v1670518516/CoffeeTime_itm0jk.jpg"
                      className="w-full h-96 object-cover overflow-hidden rounded-lg shadow-lg"
                      alt=""
                    />
                </div>
                {/* <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">

                  {keyConsiderations.length > 0 && keyConsiderations.map((kc:any, index:any) => (
                    <div key={index} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white sm:shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                      </div>
                      <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-base font-semibold leading-8 text-gray-900">Consideration {index + 1}</p>
                        <p className="mt-2 text-lg leading-7 text-gray-600">{kc.value}</p>
                      </div>
                    </div>
                  ))}
                  
                </div> */}
              </div>
            </div>
          </div>

          {/* <div className="py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="sm:text-center">
                <h2 className="text-lg font-semibold leading-8 text-emerald-600">Prompts</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Things to note</p>
              </div>

              <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">

                  {prompts.length > 0 && prompts.map((prompt:any, index:any) => (
                    <div key={index} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white sm:shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                      </div>
                      <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-base font-semibold leading-8 text-gray-900">Prompt {index + 1}</p>
                        <p className="text-lg mt-2 leading-7 text-gray-600">{prompt.value}</p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div> */}

          <div className="py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="sm:text-center">
                <h2 className="text-lg font-semibold leading-8 text-emerald-600">Prompts</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Things to note</p>
              </div>

              <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-16">

                  {prompts.length > 0 && prompts.map((prompt:any, index:any) => (
                    <div key={index} className="flex flex-col justify-start items-start">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-emerald-500 sm:shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                      </div>
                      <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-base font-semibold leading-8 text-gray-900">Prompt {index + 1}</p>
                        <p className="text-lg mt-2 leading-7 text-gray-600">{prompt.value}</p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

          <div className="py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="sm:text-center">
                <h2 className="text-lg font-semibold leading-8 text-emerald-600">People</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who this can help</p>
              </div>

              <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-16">

                  {/* {people.length > 0 && people.map((people:any, index:any) => (
                    <div key={index} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white sm:shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                      <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-lg font-semibold leading-8 text-gray-900">{people.value}</p>
                        <p className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                      </div>
                    </div>
                  ))} */}

                  {people.length > 0 && people.map((people:any, index:any) => (
                    <div key={index} className="rounded-md flex flex-col flex-wrap justify-start items-center gap-4 p-4">
                      <img className="h-56 w-56 rounded-full object-cover p-4" src="https://res.cloudinary.com/dfs5xyvsv/image/upload/v1670518518/DSC_0594_oigd8e.jpg" alt="" />
                      <div className='text-lg font-semibold'>{people.value}</div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

          <div className="py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="sm:text-center">
                <h2 className="text-lg font-semibold leading-8 text-emerald-600">Datasheet</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Some of the data behind this study</p>
              </div>

              <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">

                  {datasheet.length > 0 && datasheet.map((d:any, index:any) => (
                    <div key={index} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white sm:shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                      </div>
                      <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-lg font-semibold leading-8 text-gray-900">{d.category}</p>
                        <p className="mt-2 text-base leading-7 text-gray-600">{d.details}</p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

        </>
        // <Layout>
        //   <Header heading={caseStudy.heading} subheading="Editing" back={true} />
        //   <main>
        //     <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex justify-start gap-4 flex-wrap">
        //       <div className="w-full p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">              
        //         <UpdateCaseForm caseStudy={caseStudy}/>
        //       </div>
        //     </div>
        //   </main>
        // </Layout>
      )}
    </>
    
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

const fetchCaseStudy = async (slug:any) => {
  var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    
  const response = await fetch(`http://localhost:5000/api/cases/casestudy/${slug}`, requestOptions)
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
