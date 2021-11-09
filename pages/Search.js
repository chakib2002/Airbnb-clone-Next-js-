import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'

export default function Search({searchResults}) {
    const Router = useRouter()
    const {location , startDate, endDate, guest} = Router.query
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`
    return (
        <div>
             <Head>
                <title>Airbnb Results</title>
                <link rel="icon" href="/airbnb.ico" />
            </Head>
            <Header placeholder = {`${location} | ${range}| ${guest} guests`} />
            <main className='flex pb-7' >
                <section className='flex-grow pt-14 px-6' >
                    <p className='text-xs' >+300 Stays - {range} - for {guest} numbers of guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800'>
                        <p className='px-4 py-2 border rounded-full
                        cursor-pointer hover:shadow-lg active:scale-95
                        active:bg-gray-100 transition transform duration-100 '>
                            Cancellation Flexibility
                        </p>
                        <p className='px-4 py-2 border rounded-full
                        cursor-pointer hover:shadow-lg active:scale-95
                        active:bg-gray-100 transition transform duration-100 '>
                            Type of Place
                        </p>
                        <p className='px-4 py-2 border rounded-full
                        cursor-pointer hover:shadow-lg active:scale-95
                        active:bg-gray-100 transition transform duration-100 '>
                            Price
                        </p>
                        <p className='px-4 py-2 border rounded-full
                        cursor-pointer hover:shadow-lg active:scale-95
                        active:bg-gray-100 transition transform duration-100 '>
                            Rooms and Beds
                        </p>
                        <p className='px-4 py-2 border rounded-full
                        cursor-pointer hover:shadow-lg active:scale-95
                        active:bg-gray-100 transition transform duration-100 '>
                            More filters
                        </p>
                    </div>
                    <div className="flex flex-col">
                        {searchResults && searchResults.map(({img, location, title, description, 
                        star, price, total})=>(
                        <InfoCard img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}/>
                        ))}
                    </div>  
                </section>
            </main>
            <footer className='bg-gray-100 pl-16' >
                <Footer />
            </footer>
        </div>
    )
}

export const getServerSideProps = async () =>{
    const searchResults = await fetch("https://links.papareact.com/isz")
    .then(res=> res.json())
    .catch(err => console.log(err))

    return {
        props :{
            searchResults,
        },
    };
}
