

function Filter({filterData}){
    return(
        <div className="w-11/12 flex max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {filterData.map((data)=>(
                    <button key={data.id} 
                    className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 transition-all duration-300">
                        {data.title}
                    </button>
                )
                
            
            )}
        </div>
    )
}

export default Filter;