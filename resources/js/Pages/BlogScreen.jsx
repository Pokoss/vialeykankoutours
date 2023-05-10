import React from 'react'
import Navbar from './Components/Navbar'
import { Link } from '@inertiajs/react'
import BlogListCard2 from './Components/BlogListCard2'
import Footer from './Components/Footer'

function BlogScreen({ posts }) {
    return (
        <div>
            <Navbar />
            <div className="bg-primary">
                <section className="container items-center px-4 pb-12 mx-auto lg:flex md:px-40">

                    <div>
                        <img
                            src='https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                            className="w-full h-96 mx-auto mt-6 sm:w-10/12 lg:w-full"
                        />
                    </div>
                    <div className="flex-1 space-y-4 lg:ml-10 sm:text-center lg:text-left">
                        <h1 className="text-2xl font-bold text-gray-900">
                            This is interesting
                        </h1>
                        <p className="max-w-xl leading-relaxed text-gray-50 sm:mx-auto lg:ml-0">
                            Find out what happed to interesting
                        </p>
                        <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                            <Link
                                href={'/'}
                                className="block px-6 py-2 text-center text-white bg-yellow-600 hover:bg-yellow-700 rounded-md"
                            >
                                Read More
                            </Link>

                        </div>
                    </div>
                </section>
            </div>

            <div className="p-3 mt-6 grid grid-cols-1 gap-y-10 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                <Link href='blog/readblog'>
                    <BlogListCard2 />
                </Link>
                <Link href='blog/readblog'>
                    <BlogListCard2 />
                </Link>
                <Link href='blog/readblog'>
                    <BlogListCard2 />
                </Link>
                <Link href='blog/readblog'>
                    <BlogListCard2 />
                </Link>
                <Link href='blog/readblog'>
                    <BlogListCard2 />
                </Link>
                <Link href='blog/readblog'>
                    <BlogListCard2 />
                </Link>
                <Link href='blog/readblog'>
                    <BlogListCard2 />
                </Link>
                <Link href='blog/readblog'>
                    <BlogListCard2 />
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default BlogScreen