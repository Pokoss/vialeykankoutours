import React from 'react'

function Packages({ pack }) {
    return (

        <div className="w-full p-4 shadow-xl bg-gray-100 rounded-2xl">
            <p className="text-2xl font-bold text-black mb-3">
                {pack.name}
            </p>
            <p className="mb-4 text-sm text-gray-500">
                {pack.duration}+ days
            </p>
            {/* <p className="text-2xl font-bold text-black mb-4">
        UGX 450,000
    </p> */}

            <button type="button" className="w-full px-3 py-3 m-auto text-sm text-white bg-primary border rounded-lg shadow hover:bg-green-600 hover:text-white">
                Book now
            </button>
            <ul className="w-full mt-6 mb-6 text-sm text-black">

                {pack.activities.map((activity, index) =>
                    <li key={index} className="flex items-center mb-3">
                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                            <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                            </path>
                        </svg>
                        {activity}
                    </li>
                )}

            </ul>

            <span className="block w-56 h-1 my-2 bg-primary rounded-lg">
            </span>
            <ul className="w-full mt-6 mb-6 text-sm text-black">

                {
                    pack.addons.map((addon, index) => (

                        <li key={index} className="flex items-center mb-3 space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                                </path>
                            </svg>
                            <div>
                                {addon}

                            </div>
                        </li>
                    ))
                }

            </ul>
        </div>

    )
}

export default Packages