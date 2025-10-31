import { useState } from 'react'
import { FacebookTitle } from '../icons'
import RegisterForm from './RegisterForm'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../validation/schema'
import axios from 'axios'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { authApi } from '../api/authApi'
import useUserStore from '../stores/userStore'

function Login() {
 const login = useUserStore(state=>state.login)
 const [resetForm,setResetForm] = useState(true)
 const {handleSubmit,register,formState,reset} = useForm({
        resolver: zodResolver(loginSchema),
        // mode:'onBlur'
        mode:'onSubmit' 
        //คล้าย onchange
    })

    const {isSubmitting,errors} = formState
    
    //setResetForm(!resetForm)
    const hdlClose = () =>{setResetForm(prv=>!prv) }
    
    const onSubmit = async data =>{
      // alert(JSON.stringify(data,null,2))
      try {
        await new Promise(resolve=>setTimeout(resolve,1000))
        login(data)
        // const resp = await authApi.post('/login',data)
        // toast.success(resp.data.message)
        // toast.info(JSON.stringify(resp.data,null,2))
      } catch (err) {
        const errMsg = err.response?.data.message || err.message
        toast.error(errMsg)        
      }
    }
  
  return (
  <>
  <div className='h-[700px] pt-20 pb-28 bg-base-200'>
    
    <div className='p-5 mx-auto max-w-5xl min-h-[540px] flex justify-between max-md:flex-col'>
        
        <div className="flex flex-col max-md:items-center max-md:text-center basis-3/5 gap-4 mt-20">
        <div className="text-4xl">
            <FacebookTitle />
        </div>
        <h2 className='mt-3 text-[30px] max-md:text-[28px] leading-8 w-[514px]'>
            Fakebook helps you connect and share with the people in your life.
        </h2>
        </div>


        <div className="flex flex-1">
            <div className="card bg-base-100 w-full h-[350px] shadow-xl mt-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <fieldset disabled={isSubmitting}>
                    <div className="card-body gap-3 p-4">
                      
                      <div className="w-full">
                        <input type="text" className='input w-full' placeholder='E-mail or Phone number'{...register('identity')} />
                        <p className='text-sm  text-error'>{errors.identity?.message}</p>
                      </div>
                        
                        <div className="w-full">
                        <input type="password" className='input w-full' placeholder='password' {...register('password')}/>
                        <p className='text-sm  text-error'>{errors.password?.message}</p>
                        </div>
                        
                        <button className='btn btn-primary text-xl'>
                          Login
                           {isSubmitting && <span className="loading loading-spinner loading-sm"></span>}
                          </button>
                        <p className='text-center cursor-pointer opacity-75'>Forgotten password?</p>
                        <div className="divider"></div>
                        <button className='btn btn-secondary'
                        onClick={()=>document.getElementById('register-form').showModal()}
                        >Create new account</button>
                    </div>
                  </fieldset>
                </form>
            </div>
        </div>
    
    
    </div>
    
    </div>

    <dialog id="register-form" className="modal" onClose={hdlClose}>
  <div className="modal-box">
   
    <RegisterForm resetForm={resetForm}/>
    
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    
  </div>
</dialog>
  </>
  )
}

export default Login