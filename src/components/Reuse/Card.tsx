import React, { FC } from 'react'
import Globalbutton from '../GlobalButton/Globalbutton'

interface iProps {
    image: any,
    title: string,
    des: string
}

const Card: FC<iProps> = ({ image, title, des }) => {
    return (
        <div>
            <div className='w-[430px] h-[410px] bg-gray-500 flex flex-col gap-2'>

                <div className='h-[60%] w-full bg-slate-300'>
                    <img src={image} />
                </div>

                <div className='w-[200px] h-[30px] bg-slate-200 ml-[10px]'>{title}</div>
                <div className='w-[350px] h-[30px] bg-slate-200 ml-[10px]'>{des}</div>
                <Globalbutton choice={"pry"} buttonName='get starteds' size={"sm"} />

            </div>
        </div>
    )
}

export default Card