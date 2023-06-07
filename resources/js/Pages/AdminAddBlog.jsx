import React from 'react'
import Layout from './layouts/Layout'
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  Card,
  CardHeader,
  CardBody,
  Textarea,
} from "@material-tailwind/react";
import { useForm } from '@inertiajs/react';


function AdminAddPost({ posts }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { data, setData, processing, post, reset, errors } = useForm();

  console.log(errors)

  const handleSubmit = e => {
    e.preventDefault();
    post('/blog', {
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
      <Layout>

        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Blog Posts
                </Typography>
              </div>
              <div className="flex w-full shrink-0 gap-2 md:w-max">
                <Fragment>
                  <Button color='green' onClick={handleOpen}>
                    Add Post
                  </Button>
                  <Dialog size='xxl' open={open} handler={handleOpen}>
                    <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                      <DialogHeader>
                        <Typography variant="h5" color="blue-gray">
                          Add Post
                        </Typography>
                      </DialogHeader>
                      <DialogBody divider className="grid place-items-center gap-4">
                        <div className="mb-2 flex flex-col gap-3">
                          <Input color='green' size="lg" label="Title"
                            value={data.title ?? ''} onChange={e => setData('title', e.target.value)} error={errors.title} />
                          <Input color='green' type='file' size="lg" label="Image" accept="image/*"
                            onChange={e => setData('image', e.target.files[0])} error={errors.image} />
                          <Textarea color='green' size="lg" label="Description"
                            value={data.description ?? ''} onChange={e => setData('description', e.target.value)} error={errors.description} />
                          <Textarea color='green' size="lg" label="Content"
                            value={data.content ?? ''} onChange={e => setData('content', e.target.value)} error={errors.content} />
                        </div>
                      </DialogBody>
                      <DialogFooter className="space-x-2">
                        <Button variant="text" color="blue-gray" onClick={handleOpen}>
                          close
                        </Button>
                        <Button type='submit' color='green' variant="gradient" onClick={handleOpen}>
                          Add
                        </Button>
                      </DialogFooter>
                    </form>
                  </Dialog>
                </Fragment>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {['Title', 'description', 'Image'].map((head) => (
                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {posts && posts.map(({ title, imageurl, description }, index) => {
                  const isLast = index === posts.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {title}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {description}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {imageurl}
                        </Typography>
                      </td>
                      {/* <td className={classes}>
                    <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                      Edit
                    </Typography>
                  </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Layout>

    </div>
  )
}

export default AdminAddPost