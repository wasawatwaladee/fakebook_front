import React from 'react'
import useUserStore from '../stores/userStore'
import { FacebookLogo, FriendsIcon, HomeIcon, MenuIcon, MessengerIcon, NotificationIcon, PlayIcon, SearchIcon, ShopIcon } from '../icons'
import { Link } from 'react-router'
import { Avatar } from './Avatar'

function Header() {
  const user = useUserStore(state=>state.user)
  const logout = useUserStore(state=>state.logout)
    return (
    <div className='h-14 px-3 w-full shadow-lg bg-white fixed top-0 z-10 flex justify-between'>
        {/* search bar */}
        <div className="flex-1 flex gap-2 items-center pe-2">
        <FacebookLogo className='w-12'/>
        <label className="input rounded-full max-w-[250px]">
             <input type="search" required placeholder="Search" />
             <SearchIcon />
        </label>        
        </div>
        
        {/* navigator */}
        <div className="flex-1 flex gap-2 justify-center pe-2 ">
        <Link to='/' className='flex justify-center w-20 hover:outline-2 hover:outline-blue-900'>
        <HomeIcon className='w-1/2'/>
        </Link>

         <Link to='/' className='flex justify-center w-20 hover:outline-2 hover:outline-blue-900'>
        <PlayIcon className='w-1/2'/>
        </Link>
         
         <Link to='/' className='flex justify-center w-20 hover:outline-2 hover:outline-blue-900'>
        <ShopIcon className='w-1/2'/>
        </Link>
        
         <Link to='/' className='flex justify-center w-20 hover:outline-2 hover:outline-blue-900'>
        <FriendsIcon className='w-1/2'/>
        </Link>

        </div>
        {/* Right menu */}
        <div className="flex-1 flex gap-2 items-center justify-end  pe-2">
            <div className="avatar justify-center items-center">
         <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300">
             {/* {<img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />} */}
            <MenuIcon className='w-5'/>
        </div>
        </div>

           <div className="avatar justify-center items-center">
         <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300">
             {/* {<img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />} */}
            <MessengerIcon className='w-5'/>
        </div>
        </div>


           <div className="avatar justify-center items-center">
         <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300">
            <NotificationIcon className='w-5'/>
        </div>
        </div>
        
        <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1 btn-circle">
    <Avatar imgSrc={user.profileImage} menu bottom='-8px' className='w-[30px]' />
  </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><Link to='/profile'>Profile</Link></li>
    <li><Link to='/friends'>Friends</Link></li>
    <div className="divider"></div>
    <li><a onClick={logout}>Logout</a></li>
  </ul>
</div>

        </div>

        {/* <p className='text-xl'>Hello, {user.firstName}</p>
        <button onClick={logout} className='btn'>Logout</button> */}
    </div>
  )
}

export default Header