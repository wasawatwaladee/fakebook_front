import React from 'react'
import { PhotoIcon2 } from '../icons'

function AddPicture(props) {
  const {file,setFile} = props

  const hdlFileChange = (e) =>{
    console.dir(e.target.files[0]) //file-handle
    console.dir(e.target.value) //path to file
    let imgSrc = e.target.value ? URL.createObjectURL(e.target.files[0]):'' //Create URL for file
    console.log(imgSrc)
    setFile(e.target.files[0])
  }

    const removePic = e=>{
        e.stopPropagation();
        document.getElementById('input-file').value = ''
        setFile(null)
    }


    return (
    <div className='flex flex-col p-2 border rounded-lg'>
        <div onClick={()=>document.getElementById('input-file').click()} className="min-h-40 bg-slate-100 relative cursor-pointer
        hover:bg-slate-200">

            <input onChange={hdlFileChange}  type="file" id="input-file" className='hidden'/>

            {file && 
            <>
            <img src={URL.createObjectURL(file)} className='h-full block mx-auto max-h-[200px] object-contain'/>
            <button onClick={removePic} className='btn btn-sm btn-circle btn-dash btn-error absolute top-1 right-1 opacity-60'>X</button>
            </>
            }
          {!file && <PhotoIcon2 className='w-10 absolute top-10 right-1/2 translate-1/2 opacity-40' />}

        </div>
    </div>
  )
}

export default AddPicture