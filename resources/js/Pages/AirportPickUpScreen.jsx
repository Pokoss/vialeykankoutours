import React from 'react'
import Navbar from './Components/Navbar'
import { Input, Textarea } from '@material-tailwind/react'
import { useForm } from '@inertiajs/react';
import Footer from './Components/Footer';

function AirportPickUpScreen() {
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
            <section className="p-6">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                        <div className="text-center">
                            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                                Airport<span className="text-primary"> Pickups</span>
                            </h3>

                        </div>
                           
                        <p className="my-5">
                        Arriving in Uganda? Start your journey on the right foot with our reliable airport pickup service. Our friendly drivers will be there to welcome you, assist with your luggage, and ensure a comfortable transfer to your destination. Simply fill out the form below, and we'll take care of the rest. Experience the convenience and peace of mind that comes with our professional airport pickup service.
                        </p>
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
                    <img src="https://img.freepik.com/free-photo/place-flying-sunset-sky_1112-1132.jpg?w=740&t=st=1682675522~exp=1682676122~hmac=665559ecfe817fb6aa7a1ad36deaa7aad08429d638eac050444c36764589e1d9" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default AirportPickUpScreen