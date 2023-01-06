import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../slices/userSlice'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const apiUrl:any = process.env.NEXT_PUBLIC_API_URL

    const dispatch = useDispatch()

    const handleLogin = async () => {
        if(email == "" || password == "") {
            setErrorMessage("Please provide both email and password.")
        } else {
            setErrorMessage("")
        }

        const {data, error} = await Login(email, password)

        if(error) 
            setErrorMessage(error)
        
        
        if(data) {
            dispatch(login({
                id: data.id,
                name: data.name,
                email: data.email,
                isAdmin: data.isAdmin,
                token: data.token,
                imageUrl: data.imageUrl,
            }))
        }
    }

    const Login = async( email: string, password: string) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let params: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({ email, password }),
            redirect: 'follow'
        };

        const response = await fetch(`${apiUrl}/users/login`, params)
        const result = await response.json()
        console.log(result)
        return result
    }

    return (
        <form className='p-4 sm:p-0'>
            <p className="mb-4">Please login to your account</p>
            <div className="mb-4">
            <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="mb-4">
            <input
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            {errorMessage && <p className='text-red-400 mb-4'>{errorMessage}</p>}
            <div className="text-center pt-1 mb-12 pb-1">
            <button
                className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gradient-to-br hover:from-emerald-400 hover:to-teal-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-emerald-500 to-teal-500"
                type="button"
                onClick={handleLogin}>
                Log in
            </button>
            <a className="text-gray-500" href="#">Forgot password?</a>
            </div>
        </form>
    )
}

export default LoginForm