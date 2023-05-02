import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function ReadBlogScreen() {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto flex flex-wrap py-6'>
                <section class="w-full md:w-2/3 flex flex-col items-center px-3">
                    <article class="flex flex-col shadow my-4">

                        <a href="#" class="hover:opacity-75">
                            <img src='https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                        </a>
                        <div class="bg-white flex flex-col justify-start p-6">
                            <a href="#" class="text-yellow-600 text-sm font-bold uppercase pb-4">Nature</a>
                            <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                            <p href="#" class="text-sm pb-3">
                                By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                            </p>
                            <p class="pb-6 mt-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde possimus nihil est maiores reprehenderit magni. Dolor perspiciatis animi sapiente est adipisci nesciunt, vitae vel. Tenetur nam facere natus totam harum.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eligendi amet, deleniti reprehenderit cumque provident delectus tempora velit. Blanditiis magnam, nihil provident obcaecati nobis ullam odio. Necessitatibus nisi odit cupiditate?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi hic libero voluptatibus ab, minima beatae odio odit id ut pariatur nesciunt dicta natus modi itaque, iusto debitis? Architecto, excepturi corporis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quod tenetur unde consequatur distinctio exercitationem dicta saepe, obcaecati repudiandae corrupti aliquid iusto fuga eligendi beatae, esse, id voluptatum ut ducimus.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate ducimus repellendus, asperiores impedit commodi voluptatem voluptatibus. Doloribus incidunt harum quasi sapiente ullam vero reprehenderit quam ab itaque. Minima, esse.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eaque non commodi dignissimos velit et iusto veniam suscipit, hic voluptates ea excepturi soluta ducimus distinctio vitae, eos numquam tempore? Possimus?
                            </p>

                        </div>

                        <h4 className='text-lg ml-7 font-semibold hover:text-gray-700 pb-1'>Share Post</h4>

                        <div className="border-b border-gray-200 pb-6 flex justify-between mt-2 ml-5 mr-4">
                            <button>
                                <div className="flex ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /> <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" /> </svg>
                                    <p className="ml-1">Wh</p>
                                </div>
                            </button>




                            <div className="flex">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                </svg>
                                <p className="ml-1">Tw </p>
                            </div>

                            <div className="flex">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                </svg>
                                <p className="ml-1">Fb</p>
                            </div>

                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                </svg>

                                <p className="ml-1">Share</p>
                            </div>



                        </div>







                    </article>
                </section>

                <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
                    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                        <p class="text-xl font-semibold pb-5">About Us</p>
                        <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                        <a href="#" class="w-full bg-yellow-500 text-white font-bold text-sm uppercase rounded hover:bg-yellow-700 flex items-center justify-center px-2 py-3 mt-4">
                            Get to know us
                        </a>
                    </div>

                    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                        <p class="text-xl font-semibold pb-5">Instagram</p>
                        <div class="grid grid-cols-3 gap-3">
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" />
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2" />
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3" />
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4" />
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5" />
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6" />
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7" />
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8" />
                            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9" />
                        </div>
                        <a href="#" class="w-full bg-yellow-500 text-white font-bold text-sm uppercase rounded hover:bg-yellow-700 flex items-center justify-center px-2 py-3 mt-6">
                            <i class="fab fa-instagram mr-2"></i> Follow @dgrzyb
                        </a>
                    </div>
                </aside>
            </div>
            <Footer />
        </div>
    )
}

export default ReadBlogScreen