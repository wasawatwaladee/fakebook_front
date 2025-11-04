import { useEffect, useState } from "react"
import useUserStore from "../stores/userStore"
import CreatePost from "./CreatePost"
import axios from "axios"
import usePostStore from "../stores/postStore"
import PostItem from "./PostItem"

function PostContainer() {
    
    // const token = useUserStore(state=>state.token)
    // const [allPosts,setAllPosts] = useState([])
    const posts = usePostStore(state=>state.posts)
    const getAllPosts = usePostStore(state=>state.getAllPosts)

    useEffect(()=>{
       getAllPosts()
    },[])
  return (
    <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg">
        <CreatePost />
      
        {posts.map(post=>(
            <PostItem key={post.id} post={post} />
        ))}
        </div>
  )
}

export default PostContainer