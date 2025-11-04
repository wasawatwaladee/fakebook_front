import axios from "axios";
import useUserStore from "../stores/userStore";
//Axios Instance
export const postApi = axios.create({
    baseURL:'http://localhost:8899/api/post'
})

// const addToken = token=>({
//     headers: {Authorization: `Bearer ${token}`}
// })

postApi.interceptors.request.use(config=>{
    const token = useUserStore.getState().token
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export const createPost=(body,token)=>postApi.post('/',body)

export const getAllPosts= (token) => postApi.get('/')
