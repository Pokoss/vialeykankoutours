import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from '@inertiajs/react';

function Events({event}) {
    useEffect(() => {
        AOS.init({ duration: 600 })
      }, [])
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src={event.image}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  traveling
                </span>
                <span className="text-gray-600">— {event.date}</span>
              </p>
              <span
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {event.title}
              </span>
              <p className="mb-2 text-gray-700 line-clamp-3">
                {
                  event.description
                }
              </p>
              <span
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-primary"
              >
                Learn more
              </span>
            </div>
          </div>
  )
}

export default Events