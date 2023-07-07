"use client"
import Link from 'next/link'
import Header from '../components/header'
import { signIn } from 'next-auth/react'


export default function loginform() {
  const handleClick = () => {
    signIn("google")
  }
  return (

    <div className="w-screen h-screen bg-slate-300">
      <div className="w-full  max-w h-full  flex justify-center items-center bg-white">
        <div className="w-11/12 md:w-4/5 h-[70%] min-w-300 max-w-md flex flex-col justify-evenly items-center rounded-lg border border-solid border-gray-400" >
          <div className="text-center text-21px font-bold text-4xl text-slate-600">
            Login
          </div>
          <div className='w-2/3 h-10 flex flex-col justify-center items-center pb-20'>
            <button onClick={handleClick} className={`w-full px-3 py-2 rounded-md text-white font-semibold bg-blue-500 hover:bg-blue-700 hover:scale-110`}>Login with Google</button>
            <Link href={"/"} className="mt-4 text-xs text-blue-500 underline underline-offset-2 cursor-pointer hover:scale-125">
              Go to home page
            </Link>
          </div>
        </div>
      </div>
    </div>



  )
}
