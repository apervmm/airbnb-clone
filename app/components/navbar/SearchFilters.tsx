

function SearchFilters(){
    return(
        <div className="h-[48px] lg:h-[64] flex flex-row items-center overflow-hidden justify-between border rounded-full">
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Where</p>
                        <p className="text-sm">Wanted Location</p>
                    </div>


                    <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check In</p>
                        <p className="text-sm">Add Dates</p>
                    </div>


                    <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check Out</p>
                        <p className="text-sm">Add Dates</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Who</p>
                        <p className="text-sm">Add Guests</p>
                    </div>
                </div>
            </div>




            <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 bg-rose-400 hover:bg-rose-600 rounded-full text-whie">
                    <svg viewBox="0 0 32 32"
                        style={{
                            display: 'block', 
                            fill: 'none', 
                            height: '16px', 
                            width: '16px', 
                            stroke: 'currentcolor', 
                            strokeWidth: 4, 
                            overflow: 'visible'
                        }}>
                        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SearchFilters;