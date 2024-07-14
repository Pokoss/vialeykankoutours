import React, { Fragment, useState } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography
} from "@material-tailwind/react";

function TestimonialCard({ testimonial }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (

    <div>
      <div className="shadow-sm rounded-xl" onClick={handleOpen}>
        <blockquote className="overflow-hidden h-full  flex flex-col bg-white shadow rounded-xl">
          <header className="p-6 space-y-4 flex flex-col flex-1">
            <p className="font-light mb-1 text-gray-600 text-sm md:text-base leading-relaxed h-28 max-h-28">
              {testimonial.content}
            </p>
          </header>

          <footer className="flex items-center px-6 py-1 space-x-4 text-white bg-gradient-to-br from-primary to-green-700">
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

      <Fragment>
        <Dialog open={open} handler={handleOpen} size='xl'>
          <DialogHeader><div className='text-lg font-semibold'>Review by {testimonial.name}</div></DialogHeader>
          <DialogBody divider className="h-[29rem] overflow-scroll">
            <Typography className="font-normal">

              <div className='text-lg font-semibold'>{testimonial.title}</div>
              <div className='text-base'>{testimonial.content} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias perspiciatis aliquid deserunt expedita. Ab ducimus, cupiditate vitae mollitia, eius aut amet ut illo quasi sint ipsam accusamus ad dolorum assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nemo illum soluta sequi quod quisquam atque dolore accusamus aspernatur consequuntur debitis ipsam quo, non, est ut aliquid vero eaque cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem neque expedita labore veniam laborum autem minima vel quas quod, sit culpa ipsa impedit! Hic explicabo non eos saepe eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cupiditate placeat omnis repellendus, eos doloribus magni eligendi, corrupti facilis ducimus harum adipisci eveniet quo incidunt amet tenetur laborum officiis necessitatibus!</div>
            </Typography>

            <div className="w-full mt-3 grid grid-cols-1 gap-y-3 gap-x-1 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-2">
              {
                testimonial.image && testimonial.image.map(m => (
                 
                    <div className='rounded-xl'>
                      <img className='h-60 rounded-xl object-contain' src={'/' + m.image}/>
                    </div>
                  
                ))


              }

            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="outlined" color="red" onClick={handleOpen}>
              close
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>


    </div >
  )
}

export default TestimonialCard