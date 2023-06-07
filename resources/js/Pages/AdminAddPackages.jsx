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
} from "@material-tailwind/react";
import { useForm } from '@inertiajs/react';

function AdminAddPackages({ packages }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { data, setData, processing, post, reset, errors, transform } = useForm();

  transform((data) => ({
    ...data,
    'activities': JSON.stringify((data.activities ?? '').split(',')),
    'addons': JSON.stringify((data.addons ?? '').split(',')),
  }));

  const handleSubmit = e => {
    e.preventDefault();
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
                  <Dialog size='xl' open={open} handler={handleOpen}>
                    <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                      <DialogHeader>
                        <Typography variant="h5" color="blue-gray">
                          Add a package
                        </Typography>
                      </DialogHeader>
                      <DialogBody divider className="grid place-items-center gap-4">
                        <div className="mb-2 flex flex-col gap-3">
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
                            value={data.activities ?? ''} onChange={e => setData('activities', e.target.value)} error={errors.activities} />
                          <Input color='green' size="lg" label="Add Ons"
                            value={data.addons ?? ''} onChange={e => setData('addons', e.target.value)} error={errors.addons} />
                        </div>
                      </DialogBody>
                      <DialogFooter className="space-x-2">
                        <Button variant="text" color="blue-gray" onClick={handleOpen}>
                          close
                        </Button>
                        <Button type='submit' color='green' variant="gradient">
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
                {['Title', 'Activities', 'Addons', 'Description'].map((head) => (
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
              {packages && packages.map(({ name, description, addons, activities }, index) => {
                const isLast = index === packages.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {activities ? activities.join(', ') : ''}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {addons ? addons.join(', ') : ''}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {description}
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

export default AdminAddPackages