import Login from "../components/Login";
import { useSelector } from 'react-redux'
import { logout, selectUser } from '../slices/userSlice'
import Cases from "../components/Cases";
import Layout from "../components/Layout";

export default function Home() {
  const user = useSelector(selectUser)
  
  return (
    <>
      {
        !user 
        ? 
          <Login /> 
        :
          <Layout>
            <Cases user={user} />
          </Layout>
      }
    </>
  )
}
