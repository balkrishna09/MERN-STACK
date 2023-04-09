import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function Footer() {

  const{page,handlePageChange,totalPages} = useContext(AppContext);
  return (
    <div className='flex justify-evenly w-screen border pb-6 border-gray-400 fixed bottom-0 bg-white'>

      <div className=''>

        {page>1 && (<button onClick={()=>handlePageChange(page-1)}> Previous </button>)}
        {page < totalPages && (<button onClick={()=> handlePageChange(page+1)}> Next </button>)}
        
      </div>
      <p>Page {page} of {totalPages}</p>
    </div>
  )
}

export default Footer