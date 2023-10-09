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
  Textarea,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Spinner,
} from "@material-tailwind/react";
import { router, useForm } from '@inertiajs/react';

function AdminAddPackages({ packages }) {
  const [open, setOpen] = useState(false);
  const { data, setData, processing, post, put, reset, errors, transform } = useForm();

  const handleOpen = (pack) => {
    setData(pack ?? {});
    setOpen(!open);
  }

  transform((data) => ({
    ...data,
    'activities': JSON.stringify((data.activities ?? '')),
    'addons': JSON.stringify((data.addons ?? '')),
  }));

  const handleSubmit = e => {
    e.preventDefault();
    if (data.id) {
      put(`/packages/${data.slug}`, {
        preserveScroll: true, preserveState: true,
        onSuccess: () => {
          // toast.success('We have received you request, we shall contact you shortly')
          reset();
          setData({});
          handleOpen();
        }
      });
      return;
    }

    post('/packages', {
      preserveScroll: true, preserveState: true,
      onSuccess: () => {
        // toast.success('We have received you request, we shall contact you shortly')
        reset();
        setData({});
        handleOpen();
      }
    });
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this package?')) {
      router.delete(`/packages/${id}`, {
        preserveScroll: true, preserveState: true,
        onSuccess: () => {
          // toast.success('We have received you request, we shall contact you shortly')
        }
      })
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
                  Packages
                </Typography>
              </div>
              <div className="flex w-full shrink-0 gap-2 md:w-max">
                <Fragment>
                  <Button color='green' onClick={handleOpen}>
                    Add Package
                  </Button>
                  <Dialog size='md' open={open} handler={handleOpen}>
                    <form onSubmit={handleSubmit} className="mt-8 mb-2">
                      <DialogHeader>
                        <Typography variant="h5" color="blue-gray">
                          Add a package
                        </Typography>
                      </DialogHeader>
                      <DialogBody divider className="grid place-items-center gap-4">
                        <div className="mb-2 flex flex-col gap-3 w-full">
                          <Input color='green' size="lg" label="Title"
                            value={data.name ?? ''} onChange={e => setData('name', e.target.value)} error={errors.name} />
                          <Input color='green' size="lg" label="Duration" type='number'
                            value={data.duration ?? ''} onChange={e => setData('duration', e.target.value)} error={errors.duration} />
                          {/* <Input color='green' type='file' size="lg" label="Image" accept="image/*"
                    onChange={e => setData('image', e.target.files[0])} /> */}
                          <Input color='green' size="lg" label="Price" type='number'
                            value={data.price ?? ''} onChange={e => setData('price', e.target.value)} error={errors.price} />
                          {/* <Input color='green' type='date' size="lg" label="Start Date"
                    value={data.start_date ?? ''} onChange={e => setData('start_date', e.target.value)} error={errors.start_date} />
                  <Input color='green' type='date' size="lg" label="End Date"
                    value={data.end_date ?? ''} onChange={e => setData('end_date', e.target.value)} error={errors.end_date} /> */}
                          <Textarea color='green' size="lg" label="Description"
                            value={data.description ?? ''} onChange={e => setData('description', e.target.value)} error={errors.description} />
                          <Input color='green' size="lg" label="Activities"
                            value={data.activities ?? ''} onChange={e => setData('activities', e.target.value.split(','))} error={errors.activities} />
                          <Input color='green' size="lg" label="Add Ons"
                            value={data.addons ?? ''} onChange={e => setData('addons', e.target.value.split(','))} error={errors.addons} />
                        </div>
                      </DialogBody>
                      <DialogFooter className="space-x-2">
                        <Button variant="text" color="blue-gray" onClick={handleOpen} disabled={processing}>
                          close
                        </Button>
                        <Button type='submit' color='green' variant="gradient" disabled={processing}>
                          {processing ? <Spinner /> :
                            data.id ? 'Update' : 'Add'}
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
                  {['Title', 'Activities', 'Addons', 'Description', ''].map((head) => (
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
                {packages && packages.map((pack, index) => {
                  const isLast = index === packages.length - 1;
                  const classes = isLast ? "p-4 max-w-xs" : "p-4 max-w-xs border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {pack.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {pack.activities ? pack.activities.join(', ') : ''}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {pack.addons ? pack.addons.join(', ') : ''}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal line-clamp-3">
                          {pack.description}
                        </Typography>
                      </td>
                      <td className={" p-0"}>
                        <IconButton variant='text' onClick={() => handleOpen(pack)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                        </IconButton>
                        <IconButton variant='text' onClick={() => handleDelete(slug)}>
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
    </div>
  )
}

export default AdminAddPackages