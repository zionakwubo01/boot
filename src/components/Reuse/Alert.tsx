import React, { FC, ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { Alertcn } from './Alertcn'
import Alertsize from './Alertsize'

interface iProps {
    name: string,
    choices: any,
    size: any,
    className?: any,
    icon: ReactNode
}
const Alert: FC<iProps> = ({ name, icon, choices, size, className, ...props }) => {
    return (
        <div>
            <div className={Alertcn(Alertsize({ choices, size }), className)}>
                <div className='ml-2'>
                    {icon}
                </div>
                {name}

            </div>
        </div>
    )
}

export default Alert