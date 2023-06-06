import React from 'react'
import Layout from './layouts/Layout'
import {Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";

function AdminAddEvent() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
  return (
    <div>
        <Layout>
        <Fragment>
          <Button color='green' onClick={handleOpen}>
            Add Event
          </Button>
          <Dialog size='xl' open={open} handler={handleOpen}>
            <DialogHeader>
              <Typography variant="h5" color="blue-gray">
                Add an event
              </Typography>
            </DialogHeader>
            <DialogBody divider className="grid place-items-center gap-4">
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-2 flex flex-col gap-3">
                  <Input color='green' size="lg" label="Title" />
                  <Input color='green' type='file' size="lg" label="Image" />
                  
                  <Textarea color='green' size="lg" label="Description" />
                  <Input color='green' size="lg" label="Activities" />
                  
                </div>


              </form>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="blue-gray" onClick={handleOpen}>
                close
              </Button>
              <Button color='green' variant="gradient" onClick={handleOpen}>
                Add
              </Button>
            </DialogFooter>
          </Dialog>
        </Fragment>
        </Layout>
    </div>
  )
}

export default AdminAddEvent