import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import UpdateCaseForm from '../../components/UpdateCaseForm';
import { selectUser } from '../../slices/userSlice';

const CaseStudy = ({caseStudy}:any) => {
  console.log(caseStudy)
  const user = useSelector(selectUser)

  if(!user) {
    window.location.href = "/"
  }

  const { heading, subheading, overview, featuredImage, keyConsiderations } = caseStudy[0]

  return (
    <>
      {user && (
        <>
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

          <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center justify-start">
                <div className="mt-12 lg:mt-0">
                  <h1 className="text-6xl font-bold  tracking-tight mb-4">{heading}</h1>
                  <h1 className="text-4xl font-semibold text-emerald-500 tracking-tight mb-8">{subheading}</h1>
                  <p>{overview}</p>
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

          <div className="bg-white py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="sm:text-center">
                <h2 className="text-lg font-semibold leading-8 text-emerald-600">Key Considerations</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How to benefit from this case</p>
              </div>

              <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">

                  {keyConsiderations.length > 0 && keyConsiderations.map((kc:any, index:any) => (
                    <div key={index} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white sm:shrink-0">
                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                      </div>
                      <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-lg font-semibold leading-8 text-gray-900">{kc.value}</p>
                        <p className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                      </div>
                    </div>
                  ))}

                  {/* <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                      <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                    <div className="sm:min-w-0 sm:flex-1">
                      <p className="text-lg font-semibold leading-8 text-gray-900">Competitive exchange rates</p>
                      <p className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                  </div>

                  <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                      <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                      </svg>
                    </div>
                    <div className="sm:min-w-0 sm:flex-1">
                      <p className="text-lg font-semibold leading-8 text-gray-900">No hidden fees</p>
                      <p className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                  </div>

                  <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                      <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <div className="sm:min-w-0 sm:flex-1">
                      <p className="text-lg font-semibold leading-8 text-gray-900">Transfers are instant</p>
                      <p className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                  </div>

                  <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                      <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    </div>
                    <div className="sm:min-w-0 sm:flex-1">
                      <p className="text-lg font-semibold leading-8 text-gray-900">Mobile notifications</p>
                      <p className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                  </div> */}
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
