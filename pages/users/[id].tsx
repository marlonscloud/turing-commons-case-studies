import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import UpdateUserForm from '../../components/UpdateUserForm';
import { selectUser } from '../../slices/userSlice';

const UserData = ({userData}:any) => {
  const user = useSelector(selectUser)

  if(!user) {
    window.location.href = "/"
  }

  return (
    <>
      {user && (
        <Layout>
          <Header heading={userData.name} subheading="Editing" back={true} />
          <main>
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex justify-start gap-4 flex-wrap">
              <div className="w-full p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">              
                <UpdateUserForm userData={userData}/>
              </div>
            </div>
          </main>
        </Layout>
      )}
    </>
    
  )
}

const fetchUsers = async () => {  
  var requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const response = await fetch("https://turing-case-studies-api.azurewebsites.net/api/users", requestOptions)
  const result = await response.json()
  return result
}

const fetchUser = async (id:any) => {
  var requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow'
  };

  const response = await fetch(`https://turing-case-studies-api.azurewebsites.net/api/users/${id}`, requestOptions)
  const result = await response.json()
  return result
}

export const getStaticPaths = async () => {
    const users = await fetchUsers()
    const paths = users.map((c: { _id: any; }) => ({
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
  const userData = await fetchUser(id)

  return {
    props: { userData }
  }
}

export default UserData
