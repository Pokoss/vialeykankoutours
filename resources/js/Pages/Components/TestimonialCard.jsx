import React from 'react'

function TestimonialCard({testimonial}) {
  return (
    <div>
        <div className="shadow-sm rounded-xl">
            <blockquote className="overflow-hidden h-full  flex flex-col bg-white shadow rounded-xl">
              <header className="p-6 space-y-4 flex flex-col flex-1">
                <p className="font-light mb-1 text-gray-600 text-sm md:text-base leading-relaxed">
                  {testimonial.content}
                </p>
              </header>

              <footer className="flex items-center px-6 py-4 space-x-4 text-white bg-gradient-to-br from-primary to-green-700">
                <img className="w-10 h-10 rounded-full ring-2 ring-white" loading="lazy" src="https://picsum.photos/200" alt="Lars Klopstra" width="460" height="460" />
                <div>
                  <p className="text-lg font-bold">{testimonial.name}</p>
                  <a href="" rel="noopener" className="text-sm text-green-50">
                    {testimonial.title}
                  </a>
                </div>
              </footer>
            </blockquote>
          </div>
    </div>
  )
}

export default TestimonialCard