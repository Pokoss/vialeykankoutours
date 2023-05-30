import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Packages from './Components/Packages'
import { Link } from '@inertiajs/react';


function PackagesScreen({ packages }) {
  // const packages = [
  //   {
  //     'id': '1',
  //     'title': 'Western Special',
  //     'duration': '3 days',
  //     'activities': ["3 Hotels", "Game drive", "Gorilla tracking"],
  //     "addons": ["Free photography", "Free meals", "Free tour guide"]
  //   },
  //   {
  //     'id': '2',
  //     'title': 'Eastern Special',
  //     'duration': '3 days',
  //     'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
  //     "addons": ['Free photography', 'Free meals', 'Free tour guide']
  //   },
  //   {
  //     'id': '3',
  //     'title': 'Northern Special',
  //     'duration': '3 days',
  //     'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
  //     "addons": ['Free photography', 'Free meals', 'Free tour guide']
  //   },
  //   {
  //     'id': '3',
  //     'title': 'Southern Special',
  //     'duration': '3 days',
  //     'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
  //     "addons": ['Free photography', 'Free meals', 'Free tour guide']
  //   },
  // ]

  return (
    <div>
      <Navbar />
      <div className='container mx-auto flex flex-wrap py-6'>
        <section className="w-full flex flex-col items-center px-3">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 md:max-w-full sm:max-w-sm sm:mx-auto lg:max-w-full">
            {packages && packages.map((pack, index) => (
              <Link key={index} href={`/packages/${pack.slug}`}>
                <Packages pack={pack} />
              </Link>
            ))}
          </div>
        </section>
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

        </aside>
      </div>
      
      <Footer />
    </div>
  )
}

export default PackagesScreen