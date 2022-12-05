import { useSelector } from "react-redux";
import Dashboard from "../../components/Dashboard";
import { selectUser, logout } from "../../slices/userSlice";
import { useDispatch } from 'react-redux'
import Navbar from "../../components/Navbar";

// const user = useSelector(selectUser)

export default function NewCase() {  
    return (
        <section className="h-full bg-gray-200 md:min-h-screen">
        <div className="min-h-full">
            <Navbar />

            <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">New Case Study</h1>
            </div>
            </header>
            <main>
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex justify-start gap-4 flex-wrap">
                <p>content here...</p>
            </div>
            </main>
        </div>
        </section>
    )
}
