import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import UserLayOut from '../layouts/UserLayOut';
import useUserStore from '../stores/userStore';
// import Login from '../pages/Login';
// import Home from '../pages/Home';
// import Friends from '../pages/Friends';
// import Profile from '../pages/Profile';


const Login = lazy(()=>import('../pages/Login'))
const Home = lazy(()=>import('../pages/Home'))
const Friends = lazy(()=>import('../pages/Friends'))
const Profile = lazy(()=>import('../pages/Profile'))

const guestRouter = createBrowserRouter([
    {path:'/',element:<Login />},
    {path:'*',element:<Navigate to='/'></Navigate>}
])

const userRouter = createBrowserRouter([
    {path:'/',element: <UserLayOut />,
   children:[
        {index:true,element:<Home > </Home>},
        {path:'friends',element:<Friends />},
        {path:'profile',element:<Profile />},
        {path:'*',element:<Navigate to='/' />},
   ]
},

])
function AppRouter() {
   const user = useUserStore(state=>state.user)
// const user = {username:'andy'};
const finalRouter = user?userRouter:guestRouter
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={finalRouter}/>
        </Suspense>
  )
}

export default AppRouter;