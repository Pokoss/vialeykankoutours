import React, { Fragment, useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from "@material-tailwind/react";

function PackageDetailsScreen({ tour_package }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <div>
            <Navbar />
            <div className='container mx-auto flex flex-wrap py-6'>
                <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                    <article className="w-full flex flex-col shadow my-4">
                        <a className="text-3xl font-bold hover:text-gray-700 p-2"> {tour_package.name} </a>

                        <p className="mb-3 p-2 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                aria-label="Category"
                                title="traveling"
                            >
                                For {tour_package.duration} + days
                            </a>
                            {/* <span className="text-gray-600"> — {tour_package.start_date}</span> */}
                        </p>
                        <div className='flex items-center'>

                            <a href="https://store.pesapal.com/vialeykankoutourslimited" target='blank' className="text-white text-sm font-bold uppercase pl-2 m-2 bg-green-400 p-1 rounded w-40 text-center hover:gb-green-700">Pay here</a>
                            {
                                tour_package.price == 0 ? <></>:
                            <div href="#" className="text-green-600 text-sm font-bold uppercase pl-2">$ {tour_package.price}</div>
                            }
                        </div>

                        <div>
                            <img src={tour_package.image_url} />
                        </div>


                        <div className="bg-white flex flex-col justify-start p-6">

                            <h2 className="text-green-600 text-sm font-bold uppercase p-2">Details</h2>
                            <p className="pb-6 mt-5">
                                {tour_package.description}
                            </p>

                        </div>
                        <div className="bg-white flex flex-col justify-start px-6">

                            <h2 className="text-green-600 text-sm font-bold uppercase px-2 mb-4">What is Included</h2>
                            <ul className="max-w-md space-y-1 text-gray-500 list-inside mb-6">
                                {tour_package.activities.map((activity, index) =>
                                    <li key={index} className="flex items-center">
                                        <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        {activity}
                                    </li>
                                )}
                            </ul>

                        </div>
                        <div className="bg-white flex flex-col justify-start px-6">

                            <h2 className="text-green-600 text-sm font-bold uppercase px-2 mb-4">Add Ons</h2>
                            <ul className="max-w-md space-y-1 text-gray-500 list-inside mb-6">
                                {tour_package.addons.map((addon, index) =>
                                    <li key={index} className="flex items-center">
                                        <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        {addon}
                                    </li>
                                )}
                            </ul>

                        </div>


                        <h4 className='text-lg ml-7 font-semibold hover:text-gray-700 pb-1'>Share Event</h4>

                        <div className="border-b border-gray-200 pb-6 flex justify-between mt-2 ml-5 mr-4">
                            <button>
                                <div className="flex ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /> <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" /> </svg>
                                    <p className="ml-1">Wh</p>
                                </div>
                            </button>




                            <div className="flex">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                </svg>
                                <p className="ml-1">Tw </p>
                            </div>

                            <div className="flex">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                </svg>
                                <p className="ml-1">Fb</p>
                            </div>

                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                </svg>

                                <p className="ml-1">Share</p>
                            </div>
                        </div>
                    </article>
                </section>

                <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                        <p className="text-xl font-semibold pb-5">Book {tour_package.name}</p>
                        <p className="pb-2">Immerse yourself in the ultimate adventure with our {tour_package.name} package! Explore the breathtaking landscapes, vibrant cultures, and unforgettable wildlife encounters that await you in Uganda. From the thrilling wildlife safaris in renowned national parks to the captivating cultural experiences in local communities, this package offers a perfect blend of excitement, relaxation, and cultural immersion.<br />Don't miss out on this incredible opportunity to explore the best of Uganda. Book your {tour_package.name} package now and get ready for an adventure like no other!</p>

                        <Fragment>
                            <div className="mb-3 flex gap-3">
                                <button onClick={handleOpen} className='w-full bg-green-500 text-white font-bold text-sm uppercase rounded hover:bg-yellow-700 flex items-center justify-center px-2 py-3 mt-4' variant="gradient">
                                    Book this Package
                                </button>
                            </div>
                            <Dialog open={open} handler={handleOpen} size='xl'>
                                <DialogHeader>Book {tour_package.name}</DialogHeader>
                                <DialogBody divider>
                                    <form>
                                        <div className='my-2'>
                                            <Input color="green" label='Name' />
                                        </div>
                                        <div className='my-2'>
                                            <Input color="green" label='Phone' />
                                        </div>
                                        <div className='my-2'>
                                            <Input color="green" label='Email' />
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                            >
                                                Send
                                            </button>
                                        </div>
                                        <p className="text-xs text-gray-600 sm:text-sm">
                                            We look forword to planning your trip
                                        </p>
                                    </form>
                                </DialogBody>
                                <DialogFooter>
                                    <Button
                                        variant="text"
                                        color="red"
                                        onClick={handleOpen}
                                        className="mr-1"
                                    >
                                        <span>Cancel</span>
                                    </Button>
                                    <Button variant="gradient" color="green" onClick={handleOpen}>
                                        <span>Confirm</span>
                                    </Button>
                                </DialogFooter>
                            </Dialog>
                        </Fragment>

                    </div>


                </aside>
            </div>
            <Footer />
        </div>
    )
}

export default PackageDetailsScreen