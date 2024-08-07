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
  CardBody,
  CardHeader,
  IconButton,
} from "@material-tailwind/react";
import { router, useForm } from '@inertiajs/react';
import Compressor from 'compressorjs';



function AdminAddTestimonials({ testimonials }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(!open1);

  const [editTitle, setEditTitle] = useState('')
  const [editId, setEditId] = useState('')
  const [editName, setEditName] = useState('')

  const { data, setData, processing, post, reset, errors } = useForm();

  const handleSubmit = e => {
    e.preventDefault();
    post('/testimonials', {
      preserveScroll: true, preserveState: true,
      onSuccess: () => {
        // toast.success('We have received you request, we shall contact you shortly')
        reset();
        setData({})
      }
    });
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      router.delete(`/testimonials/${id}`, {
        preserveScroll: true, preserveState: true,
        onSuccess: () => {
          // toast.success('We have received you request, we shall contact you shortly')
        }
      })
    }
  }

  function openEdit(id, title, name) {
    setEditId(id),
      setEditName(name),
      setEditTitle(title),
      handleOpen1()
  }

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    new Compressor(file, {
      quality: 0.6,
      success(result) {
        setImage(result);
      },
      error(err) {
        console.log(err.message);
      },
    });
  };

  const postImage = async (event) => {
    event.preventDefault();
    if (image == null) {
      console.log('failed')
      handleOpen1()
    }
    else{
      try {
      router.post('/add-testimonial-image', {editId,editTitle,editName,image},
        {
          onSuccess:()=>{
            console.log('upload successful')
          }
        }
      )
    } catch (error) {
      console.log('failed2')
  }
    }
  }

  return (
    <div>
      <Layout>
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Testimonials
                </Typography>
              </div>
              <div className="flex w-full shrink-0 gap-2 md:w-max">
                <Fragment>
                  <Button color='green' onClick={handleOpen}>
                    Add Testimonials
                  </Button>
                  <Dialog size='md' open={open} handler={handleOpen}>
                    <form onSubmit={handleSubmit} className="mt-8 mb-2 w-full">
                      <DialogHeader>
                        <Typography variant="h5" color="blue-gray">
                          Add Testimonials
                        </Typography>
                      </DialogHeader>
                      <DialogBody divider className="grid place-items-center gap-4 ">
                        <div className="mb-2 flex flex-col gap-3 w-full">
                          <Input color='green' size="lg" label="Name"
                            value={data.name ?? ''} onChange={e => setData('name', e.target.value)} error={errors.name} />
                          <Input color='green' size="lg" label="Title"
                            value={data.title ?? ''} onChange={e => setData('title', e.target.value)} error={errors.title} />
                          <Input color='green' size="lg" label="Content"
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
                  {['Name', 'Title', 'Content', ''].map((head) => (
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
                {testimonials && testimonials.map(({ id, title, name, content }, index) => {
                  const isLast = index === testimonials.length - 1;
                  const classes = isLast ? "p-4 max-w-xs" : "p-4 max-w-xs border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {title}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {content}
                        </Typography>
                      </td>
                      <td className={" p-0"}>
                        <button onClick={() => openEdit(id, title, name)} className='bg-green-600 rounded-md p-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        </button>
                      </td>
                      <td className={" p-0"}>
                        <IconButton variant='text' onClick={() => handleDelete(id, title, name)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </IconButton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Layout>

      <Fragment>
        <Dialog open={open1} handler={handleOpen1} size='xl'>
          <form onSubmit={postImage}>
            <DialogHeader>Add images for {editName}'s review </DialogHeader>
            <DialogBody divider className="h-[29rem] overflow-scroll">
              <p className='text-lg font-semibold mb-5'>{editTitle}</p>

              <Input color='green' label='Add an Image' accept=".jpg,.jpeg,.png" size='md' type='file' onChange={handleImageChange} />
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="outlined" color="red" onClick={handleOpen1}>
                close
              </Button>
              <Button type='submit' variant="outlined" color="green">
                Add
              </Button>
            </DialogFooter>
          </form>
        </Dialog>

      </Fragment>

    </div>
  )
}

export default AdminAddTestimonials