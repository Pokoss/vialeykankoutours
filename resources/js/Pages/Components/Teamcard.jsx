import { Tooltip, Typography } from '@material-tailwind/react'
import React, { Fragment, useState } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";

function Teamcard({employee}) {
    const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
    return (
        <Fragment>

        
        
        <div onClick={handleOpen} className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-4">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: `url('${employee.image}')` }}
                title="Woman holding a mug">
            </div>
            <div
                className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
                <div className="">
                    <a href="#"
                        className="text-gray-900 font-bold text-xl mb-2 hover:text-primary transition duration-500 ease-in-out">
                       {employee.name}</a>
                    <p className="text-sm text-gray-600">
                        {employee.title}
                    </p>
                    <p className="text-gray-500 text-base mt-4 line-clamp-5">
                        {employee.description}
                    </p>

                   

                </div>

            </div>
        </div>
      


        <Dialog open={open} handler={handleOpen} size='xl'>
        <DialogHeader>{employee.name}</DialogHeader>
        <DialogBody divider className="h-[40rem] overflow-scroll">
          <Typography className="font-normal">
            <div dangerouslySetInnerHTML={{__html:employee.description}}>
            </div>
            
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpen}>
            close
          </Button>
        </DialogFooter>
      </Dialog>
        </Fragment>
    )

}

export default Teamcard