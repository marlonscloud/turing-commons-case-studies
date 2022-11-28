import Login from "../components/Login";
import { useSelector, useDispatch } from 'react-redux'
import { logout, selectUser } from '../slices/userSlice'
import Dashboard from "../components/Dashboard";

export default function Home() {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  if(!user) {
    return (
      <Login />
    )
  }
  
  return (
    <section className="h-full bg-gray-200 md:min-h-screen">
      <Dashboard user={user} />
    </section>
  )
}
