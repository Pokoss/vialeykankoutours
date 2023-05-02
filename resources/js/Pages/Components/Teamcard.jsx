import React from 'react'

function Teamcard({employee}) {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-4">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: `url('${employee.image}')` }}
                title="Woman holding a mug">
            </div>
            <div
                className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
                <div className="">
                    <a href="#"
                        className="text-gray-900 font-bold text-xl mb-2 hover:text-primary transition duration-500 ease-in-out">
                       {employee.name}</a>
                    <p className="text-sm text-gray-600">
                        {employee.title}
                    </p>
                    <p className="text-gray-500 text-base mt-4 line-clamp-2">
                        {employee.description}
                    </p>

                    <div className="my-4 flex">
                        <a href="#">

                            <svg className="mr-3" width="18px" height="18px" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g data-name="Layer 2">
                                    <g data-name="facebook">
                                        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                        <path
                                            d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z">
                                        </path>
                                    </g>
                                </g>
                            </svg></a>

                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="mr-3" width="18px" height="18px">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                            </svg>
                        </a>
                        <a
                            href="/"

                        >
                            <svg viewBox="0 0 30 30" fill="currentColor" className="mr-3" width="18px" height="18px">
                                <circle cx="15" cy="15" r="4" />
                                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                            </svg>
                        </a>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default Teamcard