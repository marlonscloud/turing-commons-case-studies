import Link from 'next/link';
import React from 'react'
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import UpdateCaseForm from '../../components/UpdateCaseForm';

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
            <UpdateCaseForm caseStudy={caseStudy}/>
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
