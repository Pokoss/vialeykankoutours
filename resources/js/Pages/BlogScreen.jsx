import React from 'react'
import Navbar from './Components/Navbar'
import { Link } from '@inertiajs/react'
import BlogListCard2 from './Components/BlogListCard2'
import Footer from './Components/Footer'

function BlogScreen({ posts, latest }) {
    return (
        <div>
            <Navbar />
            <div className="bg-primary">
                {latest && <section className="container items-center px-4 pb-12 mx-auto lg:flex md:px-40">

                    <div>
                        <img
                            src={latest.imageurl}
                            className="w-full h-96 mx-auto mt-6 sm:w-10/12 lg:w-full"
                        />
                    </div>
                    <div className="flex-1 space-y-4 lg:ml-10 sm:text-center lg:text-left">
                        <h1 className="text-2xl font-bold text-gray-900">
                            {latest.title}
                        </h1>
                        <p className="max-w-xl leading-relaxed text-gray-50 sm:mx-auto lg:ml-0">
                            {latest.description}
                        </p>
                        <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                            <Link
                                href={'/blog/' + latest.slug}
                                className="block px-6 py-2 text-center text-white bg-yellow-600 hover:bg-yellow-700 rounded-md"
                            >
                                Read More
                            </Link>

                        </div>
                    </div>
                </section>}
            </div>

            <div className="p-3 mt-6 grid grid-cols-1 gap-y-10 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                {posts && posts.map((post, index) => (
                    <Link key={index} href={'/blog/' + post.slug}>
                        <BlogListCard2 post={post} />
                    </Link>
                ))}
            </div>

            {posts && posts.length == 0 &&
                <div className='flex w-full bg-gray-200 text-gray-700 font-semibold p-5 justify-center items-center'>
                    No posts found
                </div>
            }
            <Footer />
        </div>
    )
}

export default BlogScreen