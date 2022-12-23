import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import UpdateCaseForm from '../../components/UpdateCaseForm';
import { selectUser } from '../../slices/userSlice';

const CaseStudy = ({caseStudy}:any) => {
  const user = useSelector(selectUser)

  if(!user) {
    window.location.href = "/"
  }

  return (
    <>
      {user && (
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
      )}
    </>
    
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

const fetchCaseStudy = async (id:any) => {
  var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    
  const response = await fetch(`https://turing-case-studies-api.azurewebsites.net/api/cases/${id}`, requestOptions)
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
