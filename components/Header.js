import React from 'react'
import Image from 'next/image'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/solid'

export default function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10' >
            {/* Left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto  ' >
                <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left'/>
            </div>
            {/* Middle */}
            <div className="flex items-center border-2 rounded-full py-2 shadow-sm">
                <input
                className='flex-grow pl-5 bg-transparent outline-none text-sm' 
                type="text" 
                placeholder='Start your search'
                />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
            </div>
            {/* Right */}
            <div>
                <div className="flex items-center space-x-4 justify-end text-gray-600 font-medium">
                    <p className='hidden lg:inline-flex lg:cursor-pointer lg:py-3 lg:px-4 hover:bg-gray-100 hover:rounded-full hover:animate-pulse '>Become a Host</p>
                    <div className='flex items-center md:cursor-pointer hover:bg-gray-100 hover:rounded-full p-2'>
                        <GlobeAltIcon className='h-6 hover:animate-spin'/>
                    </div>
                    <div className="flex cursor-pointer items-center space-x-2 border-2 p-2 rounded-full hover:shadow-lg">
                        <MenuIcon className='h-6' />
                        <UserCircleIcon className='h-6' />
                    </div>
                </div>
            </div>
        </header>
    )
}
