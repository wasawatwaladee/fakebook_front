import React from 'react'

function PostItem({post}) {
  return (
    <div className="card bg-base-100">
                <div className="card-body">
                    <p>{post.user.firstName} {post.user.lastName}</p>
                    <p>{post.message}</p>
                    <img src={post.image} className="max-h-[120px] object-contain" />
                    <div className="divider"></div>
                </div>
            </div>
  )
}

export default PostItem