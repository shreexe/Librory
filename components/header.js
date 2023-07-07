import React, { useState } from 'react'
import loginform from '../pages/loginform'

import Link from 'next/link'
import { useRouter } from 'next/router'


const Header = () => {
    const router=useRouter()
    
    return (
        
            <nav className="bg-slate-400 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 justify-evenly">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-blue">LiBROry</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <button id='login'onClick={()=>router.push('/loginform')} className="text-gray-800 dark:text-white hover:bg-blue-50  focus:ring-1  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <button id='allbooks' onClick={()=>router.push('/all-bookindex')} className="block py-2 pr-4 pl-3  self-center active:bg-slate-500 focus:ring-slate-500 hover:text-black text-slate-800 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">All Books</button>

                            </li>
                            <li>
                                <button id='cart'onClick={()=>router.push('/cart')} className="block py-2 pr-4 pl-3 text-slate-800 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Cart</button>
                            </li>
                            
                            <li>
                                <form className='pl-20 justify-end'>
                                    
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="search" 
                                        
                                        id="default-search" class="block w-80 h-5 p-4 pl-10 pb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Books" required />
                                            <button type="submit" class="text-white h-4 absolute right-2.5 bottom-1  bg-slate-300 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-xs  px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"></button>
                                    </div>
                                </form>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
    
    )
}
export default Header
