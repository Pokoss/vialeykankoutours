import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function GalleryScreen({ gallery }) {

  function getFirstAndLastHalf(array) {
    const halfwayIndex = Math.ceil(array.length / 2);
    const firstHalf = array.slice(0, halfwayIndex);
    const lastHalf = array.slice(-halfwayIndex);
    return { firstHalf, lastHalf };
  }

  const galleryArray = getFirstAndLastHalf(gallery ?? []);

  return (
    <div>
      <Navbar />

      <div className="text-center mt-5">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Our<span className="text-primary"> Gallery</span>
        </h3>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-10">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            {gallery && galleryArray.firstHalf.map((gall, index) => (
              <div key={index} className={`${(index + 1) % 3 === 0 ? 'w-full' : 'w-1/2'} p-1 md:p-2`}>
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gall.image} />
              </div>
            ))}
          </div>
          <div className="flex w-1/2 flex-wrap">
            {gallery && galleryArray.lastHalf.map((gall, index) => (
              <div key={index} className={`${(index + 1) % 3 === 1 ? 'w-full' : 'w-1/2'} p-1 md:p-2`}>
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gall.image} />
              </div>
            ))}
          </div>

          {/* okayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
            </div>
          </div> */}
        </div>
      </div>






      {/* <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
        </div>
      </div>
    </div>
  </div> */}

      <Footer />
    </div>
  )
}

export default GalleryScreen