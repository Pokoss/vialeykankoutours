import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Input, Textarea } from '@material-tailwind/react'
import { useForm } from '@inertiajs/react';

function ConsultationScreen() {
  const { data, setData, processing, post, reset, errors } = useForm();

  const handleSubmit = e => {
    e.preventDefault();
    post('', {
      preserveScroll: true, preserveState: true,
      onSuccess: () => {
        // toast.success('We have received you request, we shall contact you shortly')
        reset();
        setData({})
      }
    });
  }

  return (
    <div>
      <Navbar />

      <section class="mb-40">

        <div class="px-6 py-12 md:px-12 bg-gray-100 text-gray-800 text-center lg:text-left">
          <div class="container mx-auto xl:px-32">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div class="mt-12 lg:mt-0">
                <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Tourism<br /><span class="text-primary">Consultation</span></h1>
                <p class="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>
              <div class="mb-12 lg:mb-0">
                <div class="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
                  <form onSubmit={handleSubmit} className="self-stretch ng-untouched ng-pristine ng-valid">
                    <div>
                      <div className='my-2'>
                        <Input color="green" label='Name' value={data.name ?? ''} onChange={e => setData('name', e.target.value)} error={errors.name} />
                        {errors.name && <span className='text-xs text-red-500'>{errors.name}</span>}
                      </div>
                      <div className='my-2'>
                        <Input color="green" label='Email' value={data.email ?? ''} onChange={e => setData('email', e.target.value)} error={errors.email} />
                        {errors.email && <span className='text-xs text-red-500'>{errors.email}</span>}
                      </div>
                      <div className='my-2'>
                        <Input color="green" label='Phone' value={data.phone ?? ''} onChange={e => setData('phone', e.target.value)} error={errors.phone} />
                        {errors.phone && <span className='text-xs text-red-500'>{errors.phone}</span>}
                      </div>
                      <div className='my-2'>
                        <Textarea color="green" label="Extra Details" value={data.details ?? ''} onChange={e => setData('details', e.target.value)} error={errors.details} />
                        {errors.details && <span className='text-xs text-red-500'>{errors.details}</span>}
                      </div>
                      <button type="submit" disabled={processing} className="w-full py-2 font-semibold bg-primary text-white rounded ">Send Request</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
    <div class="-m-1 flex flex-wrap md:-m-2">
      <div class="flex w-1/3 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
        </div>
      </div>
      <div class="flex w-1/3 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
        </div>
      </div>
      <div class="flex w-1/3 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
        </div>
      </div>
      <div class="flex w-1/3 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
        </div>
      </div>
      <div class="flex w-1/3 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
        </div>
      </div>
      <div class="flex w-1/3 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
        </div>
      </div>
    </div>
  </div> */}

      <Footer />
    </div>
  )
}

export default ConsultationScreen