import Login from "../../components/Login";
import { useSelector } from 'react-redux'
import { logout, selectUser } from '../../slices/userSlice'
import Layout from "../../components/Layout";
import UserManagement from "../../components/UserManagement";

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
            <UserManagement />
          </Layout>
      }
    </>
  )
}
