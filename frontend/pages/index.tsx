import Login from "../components/Login";
import { useSelector } from 'react-redux'
import { logout, selectUser } from '../slices/userSlice'
import Dashboard from "../components/Dashboard";
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
            <Dashboard user={user} />
          </Layout>
      }
    </>
  )
}
