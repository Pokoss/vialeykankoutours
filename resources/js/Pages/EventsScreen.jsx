import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Events from './Components/Events'
import { Link } from '@inertiajs/react';


function EventsScreen({events}) {

  // const events = [
  //   {
  //     'id': '1',
  //     'title': 'Queen Elizabeth',
  //     'image': 'https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500',
  //     'date': '28 Dec 2023',
  //     'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, odio beatae. Repellat tempore aspernatur delectus, quam cumque quis necessitatibus animi eius, eveniet laudantium officiis ea iusto, sed nam optio? Vero?',
  //   },
  //   {
  //     'id': '2',
  //     'title': 'Karuma Falls',
  //     'image': 'https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500',
  //     'date': '28 Dec 2023',
  //     'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, odio beatae. Repellat tempore aspernatur delectus, quam cumque quis necessitatibus animi eius, eveniet laudantium officiis ea iusto, sed nam optio? Vero?',
  //   },
  //   {
  //     'id': '3',
  //     'title': 'Kampala night',
  //     'image': 'https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500',
  //     'date': '28 Dec 2023',
  //     'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, odio beatae. Repellat tempore aspernatur delectus, quam cumque quis necessitatibus animi eius, eveniet laudantium officiis ea iusto, sed nam optio? Vero?',
  //   },

  // ]

  return (
    <div>
      <Navbar />

      <div className='container mx-auto flex flex-wrap py-6'>
        <section class="w-full md:w-2/3 flex flex-col items-center px-3">
          <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-2 md:max-w-full sm:max-w-sm sm:mx-auto lg:max-w-full">

          {events && events.map((event) => (
              <Link href={`/events/${event.slug}`}>
                <Events event={event} />
              </Link>
            ))}

            

          </div>
        </section>
        <aside class="w-full md:w-1/3 flex flex-col items-center px-3">

        </aside>
      </div>

      <Footer />
    </div>
  )
}

export default EventsScreen