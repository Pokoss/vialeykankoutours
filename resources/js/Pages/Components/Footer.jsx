import React from 'react'
import { Link } from '@inertiajs/react'



function Footer() {

  function openInstagram() {
    window.open('https://instagram.com/vialeykankoutours?igshid=OGQ5ZDc2ODk2ZA==', '_blank');
  }
    function openFacebook() {
    window.open('https://www.facebook.com/profile.php?id=100064792132405', '_blank');
  }
    
  return (
    <div className="relative mt-16 bg-primary">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="#12d933"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src='/Images/logo.png' className='w-16 h-14 mr-1'/>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Vialey Kankou Tours
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-white">
              Your gateway to extraordinary adventures in Uganda. Explore breathtaking landscapes, vibrant cultures, and unforgettable wildlife encounters. Let us guide you through the beauty and warmth of Uganda for an unforgettable journey.
              </p>
              
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Links
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/gallery"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutus"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Services
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/airportpickup"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Airport Pickups
                  </Link>
                </li>
                <li>
                  <Link
                    href="/carhire"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Car Hire
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consultation"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/packages"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Packages
                  </Link>
                </li>
                
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Social Media
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    LinkedIn
                  </a>
                </li>
               
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Subscribe
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                <div className="form-group mb-6">
                      <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                        placeholder="Email address" />
                    <button type="submit" className="w-full mt-3 px-6 py-2.5 bg-yellow-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                      Subscribe
                    </button>
                    </div>
                </li>
                
              
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm font-thin text-gray-50">
            © Copyright {(new Date().getFullYear())} Vialey Kankou Tours. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            
            <button
              onClick={openInstagram}
              className="transition-colors duration-300 text-white hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </button>
            <button
              onClick={openFacebook}
              className="transition-colors duration-300 text-white hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer