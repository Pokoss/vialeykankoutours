import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Jobcard from './Components/Jobcard'

function CareersScreen() {
    return (
        <div>
            <Navbar />

            <div>

                <div className="relative bg-primary">
                    <div className="absolute inset-x-0 bottom-0">
                        <svg
                            viewBox="0 0 224 12"
                            fill="currentColor"
                            className="w-full -mb-1 text-white"
                            preserveAspectRatio="none"
                        >
                            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                        </svg>
                    </div>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Vialey Kankou Tours

                                <span className="relative inline-block px-2">
                                    <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                                    <span className="relative text-gray-800">Job Oppotunities </span>
                                </span>
                            </h2>
                            <p className="mb-6 text-base text-black md:text-lg">
                                Do you have what it takes to be apart of our team, see the jobs listed below or you can fill in a form at the bottom telling us the value you can add to the team
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-xl mx-auto text-center pt-10 md:py-10">
                <div className="w-24 h-2 bg-primary mb-4 mx-auto"></div>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">Job Openings</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 md:max-w-full sm:max-w-sm sm:mx-auto lg:max-w-full">
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
            </div>
    
            <Footer />
        </div>
    )
}

export default CareersScreen