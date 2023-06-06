import React from 'react'
import Navbar from './Components/Navbar'
import { Input, Textarea } from '@material-tailwind/react'
import { useForm } from '@inertiajs/react';
import Footer from './Components/Footer';

function CarHireScreen() {
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
                    <div className="w-full px-6  rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                        <div className="text-center">
                            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                                Car<span className="text-primary"> Hire</span>
                            </h3>
                        </div>
                        <p className="my-5">
                        Experience the freedom of exploring Uganda at your own pace with our convenient car hire service. Our well-maintained vehicles provide you with the flexibility to create your unique travel experience. Whether you're planning a safari or an off-the-beaten-path adventure, our team is here to assist you. Complete the form below to inquire about our car hire options, and let the journey begin.
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
                    <img src="https://img.freepik.com/free-photo/handsome-elegant-man-car-salon_1157-30188.jpg?w=740&t=st=1682675591~exp=1682676191~hmac=3a79ca2e03342850b4ad7cc52504ff2617d17d4366b891d6fb412cd2ea7f0e1e" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default CarHireScreen