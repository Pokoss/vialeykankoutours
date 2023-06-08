import { Link, useForm, usePage } from '@inertiajs/react'
import React from 'react'

function AdminLoginScreen() {
  const { errors } = usePage().props
  const { data, post, setData } = useForm()

  const handleSubmit = e => {
    e.preventDefault();

    post('', {
      forceFormData: true,
      preserveScroll: true, preserveState: true
    })
  }

  return (
    <div>
      <section className="flex flex-col md:flex-row h-screen items-center">

        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260 " alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">

          <div className="w-full h-100">


            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Login to your admin account</h1>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input type="email" value={data.email ?? ''} onChange={e => setData('email', e.target.value)}
                  name="email" id="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus required />
                {errors.email && <div className='text-sm text-red-500'>{errors.email}</div>}
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" value={data.password ?? ''} onChange={e => setData('password', e.target.value)}
                  name="password" id="password" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none" required />
                {errors.password && <div className='text-sm text-red-500'>{errors.password}</div>}
              </div>

              <input class="hidden" type="checkbox" name="remember" id="remember" />

              <div className="text-right mt-2">
                <Link href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</Link>
              </div>

              <button type="submit" className="w-full block bg-primary hover:bg-yellow-700 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />
          </div>
        </div>

      </section>
    </div>
  )
}

export default AdminLoginScreen