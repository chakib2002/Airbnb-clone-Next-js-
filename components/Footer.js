import React from 'react'

export default function Footer() {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-4 px-13 py-16'>
            <div className='space-y-4 text-xs text-gray-800 mb-16'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How AirBnB works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>AirBnB plus</p>
                <p>AirBnB Luxe</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800 mb-16' >
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real website</p>
                <p>It is a real awsome clone</p>
                <p>Referrals accepted</p>
                <p>Chakib</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800 mb-16'>
                <h5 className='font-bold'>HOST</h5>
                <p>ME</p>
                <p>Vercel</p>
                <p>We do great job</p>
                <p>React</p>
                <p>Join now</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800 mb-4'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Make money</p>
                <p>Work hard</p>
                <p>Be consistent</p>
                <p>Love what you do</p>
                <p>Programming</p>
            </div>
        </div>
    )
}
