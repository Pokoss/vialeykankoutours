import React from 'react'
import Layout from './layouts/Layout'


function AdminHomeScreen({ events_count, packages_count, testimonials_count, blog_count }) {

    return (
        <div>
            <Layout>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-4 gap-4">
                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex-shrink-0">
                                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Blog</span>
                                <h3 className="text-base font-normal text-gray-500">Add a blog write up</h3>
                            </div>
                            <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                {blog_count}
                            </div>
                        </div>
                        <div id="main-chart" className='w-full h-full'>
                        </div>
                    </div>

                    {/* <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex-shrink-0">
                                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Team</span>
                                <h3 className="text-base font-normal text-gray-500">Edit team members</h3>
                            </div>
                            <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                6
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <div id="main-chart" className='w-full h-full'>
                        </div>
                    </div> */}

                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex-shrink-0">
                                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Packages</span>
                                <h3 className="text-base font-normal text-gray-500">Add Edit and Delete</h3>
                            </div>
                            <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                {packages_count}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <div id="main-chart" className='w-full h-full'>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex-shrink-0">
                                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Events</span>
                                <h3 className="text-base font-normal text-gray-500">Add, Edit and Delete Events</h3>
                            </div>
                            <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                {events_count}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <div id="main-chart" className='w-full h-full'>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex-shrink-0">
                                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Testimonials</span>
                                <h3 className="text-base font-normal text-gray-500">Testimonials</h3>
                            </div>
                            <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                {testimonials_count}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <div id="main-chart" className='w-full h-full'>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default AdminHomeScreen