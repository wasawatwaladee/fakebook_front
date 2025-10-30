import { Outlet } from 'react-router'

function UserLayOut() {
  return (
    <>
   <div className='py-4 border'>Header</div>
   <Outlet />
   </>
  )
}

export default UserLayOut