import React from 'react'


function BlogListCard2({post}) {
      return (
    <div>
      <div className="w-full rounded-lg shadow-md lg:max-w-sm" >
        <img
          className="object-cover w-full h-48"
          src='https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt="image"
        />
        <div className="p-4">
          <h4 className="text-lg font-bold mb-1 line-clamp-2">
            {post.title}
            </h4>
          <p className="mb-2 leading-normal text-gray-500 line-clamp-2">
            {post.description}
          </p>
          <p className="text-gray-500 mb-1">
            <small>Published <u>{post.created_at}</u></small>
          </p>

        </div>
      </div>
    </div>
  )
}

export default BlogListCard2