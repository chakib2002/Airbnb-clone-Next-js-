import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({exploreData, cardData}) {
  return (
    <div>
      <Head>
        <title>AirBnb clone</title>
        <link rel="icon" href="/airbnb.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className='max-w-7xl mx-auto px-8 sm:px-16 ' >
        <section className='pt-6' >
          <h2 className='text-4xl pb-5 font-semibold' >Explore Nearby</h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' >
          {exploreData?.map(item=>(
            <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance} />
          ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold pt-8">
            Live Anywhere
          </h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide px-3 py-8 overscroll-auto' >
          {
            cardData?.map((item)=>(
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))
          }
          </div>
        </section>
        <section>
          <LargeCard img='https://links.papareact.com/4cj'
                     title='The Greatest Outdoors'
                     description='Wishlists curated by AirBnB' 
                     button='Get Inspired' />
        </section>
      </main>
      <footer className='bg-gray-100 pl-16'>
        <Footer />
      </footer>
    </div>
  )
}

export const getStaticProps = async () =>{
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res)=>res.json()
  )

  const cardData = await fetch('https://links.papareact.com/zp1').then(
    (res)=>res.json()
  )

  return {
    props :{
      exploreData,
      cardData
    }
  }
}
