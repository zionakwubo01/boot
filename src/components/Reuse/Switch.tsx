import { useState } from "react"


const Switch = () => {
    const [state, setState] = useState<boolean>(false)
    return (
        <div>
            <br />
            {
                state ?

                    <div className="py-1 w-[50px] bg-black rounded-2xl transition-all duration-300
                    
                    
                    "
                        onClick={() => {
                            setState(false)

                        }}
                    >
                        <div className="w-[20px] h-[20px] bg-green-300 rounded-[50%] ml-[2px]">

                        </div>
                    </div>
                    :
                    <div className="py-1 w-[50px] bg-slate-200 rounded-2xl  flex justify-end 
                    transition-all duration-300
                    "
                        onClick={() => {
                            setState(true)
                        }}
                    >
                        <div className="w-[20px] h-[20px] bg-black rounded-[50%] ml-[2px] mr-[2px]"

                        >

                        </div>
                    </div>
            }

        </div>
    )
}

export default Switch