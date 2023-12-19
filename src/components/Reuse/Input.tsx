import { FC, InputHTMLAttributes, ReactNode, useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { MdSearch } from "react-icons/md"

interface iProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    icon?: ReactNode
    color?: string
    basecolor?: string
    className?: any
}


const Input: FC<iProps> = ({ placeholder, icon, color, basecolor, className, ...props }) => {

    const [state, setState] = useState<boolean>(false)
    const myInput: React.MutableRefObject<any> = useRef(null)

    useEffect(() => {
        if (state) {
            myInput.current.focus()
        }
    }, [state])

    return (
        <div className={twMerge(
            `w-[350px] h-[50px] border flex rounded-md px-2  items-center
            ${state ?
                `${color ? color : "border-blue-500"}` :
                `${basecolor ? basecolor : ""}`}
            `,
            className
        )}
            onClick={() => {
                setState(true)
            }}
        >

            <div>
                {icon && <div>{icon}</div>}
            </div>

            <input
                className="w-full h-full bg-transparent outline-none pl-1"
                {...props}
                ref={myInput}
                type="text"
                placeholder={`${placeholder}`}
                onBlur={() => {
                    setState(false)
                }}
            />
        </div>
    )
}

export default Input