import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function Footer() {

  const{page,handlePageChange,totalPages} = useContext(AppContext);
  return (
    <div className='flex justify-evenly w-screen border  border-gray-400 fixed bottom-0 bg-white'>

      <div className='flex gap-x-4 pt-2'>

        {page>1 && (<button onClick={()=>handlePageChange(page-1)}
        className='border p-1 rounded-md border-gray-400'> Previous </button>)}

        {page < totalPages && (<button onClick={()=> handlePageChange(page+1)}
        className='border p-3 rounded-md border-gray-400'> Next </button>)}
        
      </div>
      <p className='font-bold pt-3'>Page {page} of {totalPages}</p>
    </div>
  )
}

export default Footer