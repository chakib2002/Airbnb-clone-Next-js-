import React, { useState } from 'react'
import Image from 'next/image'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon} from '@heroicons/react/solid'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

export default function Header({placeholder}) {
    const [searchInput, setSearchInput]=useState("")
    const [startDate, setStartDate]=useState(new Date())
    const [endDate, setEndDate]=useState(new Date())
    const [guest, setGuest] = useState(1)
    const Router = useRouter()

    const handleSelect = (ranges)=>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = (e)=>{
        setSearchInput("")
    }

    const selectionRange={
        startDate :startDate,
        endDate:endDate,
        key:'selection'
    }

    const search = ()=>{
        Router.push({
            pathname:'/Search',
            query : {
                location: searchInput,
                startDate : startDate.toISOString(),
                endDate : endDate.toISOString(),
                guest:guest
            }
        })
    }


    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10' >

            <div className='relative flex items-center h-10 cursor-pointer my-auto active:scale-95 transition transform duration-150 ease-out '
             onClick={()=>Router.push("/")} >
                <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left'/>
            </div>

            <div className="flex items-center border-2 rounded-full py-2 shadow-sm ">
                <input
                className='flex-grow overflow-x-hidden pl-5 bg-transparent outline-none text-sm' 
                value={searchInput}
                onChange={(e)=>setSearchInput(e.target.value)}
                type="text" 
                placeholder={placeholder || 'Where you want to go ?'}
                />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
            </div>

            <div>
                <div className="flex items-center space-x-4 justify-end text-gray-600 font-medium">
                    <p className='hidden lg:inline-flex lg:cursor-pointer 
                    lg:py-3 lg:px-4 hover:bg-gray-100 hover:rounded-full 
                    hover:animate-pulse '>
                        Become a Host
                    </p>
                    <div className='flex items-center md:cursor-pointer hover:bg-gray-100 hover:rounded-full p-2'>
                        <GlobeAltIcon className='h-6 hover:animate-spin'/>
                    </div>
                    <div className="flex cursor-pointer items-center space-x-2 border-2 p-2 rounded-full hover:shadow-lg">
                        <MenuIcon className='h-6' />
                        <UserCircleIcon className='h-6' />
                    </div>
                </div>
            </div>
            {
                searchInput &&(
                    <div className='flex flex-col col-span-3 mx-auto mt-4 '>
                        <DateRangePicker ranges={[selectionRange]} 
                                         minDate={new Date()} 
                                         rangeColors={["#FD5B61"]} 
                                         onChange={handleSelect}
                                     />
                                     <div className='flex items-center pb-4 border-b bg-white'>
                                        <h2 className="text-2xl flex-grow font-semibold">
                                            Number of Guests
                                        </h2>
                                        <UserIcon className='h-5' />
                                        <input 
                                            value={guest}
                                            onChange={(e)=>setGuest(e.target.value)}
                                            type="number"
                                            min={1}
                                            max={16}
                                            className="w-12 pl-2 text-lg outline-none text-red-400" />
                                     </div>
                                     <div className="flex bg-white pt-4">
                                        <button className='flex-grow text-gray-800 hover:bg-gray-100 p-4 rounded-full ' onClick={resetInput}>Cancel</button>
                                        <button onClick={search} className='flex-grow text-red-400 hover:bg-gray-100 p-4 rounded-full'>Search</button>
                                     </div>
                    </div>
                    )
                }
           
        </header>
    )
}
