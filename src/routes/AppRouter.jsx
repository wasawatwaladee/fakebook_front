import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import UserLayOut from '../layouts/UserLayOut';

const guestRouter = createBrowserRouter([
    {path:'/',element:<p>login</p>},
    {path:'*',element:<Navigate to='/'></Navigate>}
])

const userRouter = createBrowserRouter([
    {path:'/',element: <UserLayOut />,
   children:[
        {path:'',element:<p>Home page</p>},
        {path:'friends',element:<p>Friends page</p>},
        {path:'profile',element:<p>Profile page</p>},
        {path:'*',element:<Navigate to='/' />},
   ]
},

])
function AppRouter() {
const user = {username:'andy'};
const finalRouter = user?userRouter:guestRouter
    return (
  <RouterProvider router={finalRouter}/>
  )
}

export default AppRouter;