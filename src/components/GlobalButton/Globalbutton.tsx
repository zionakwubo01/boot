import { FC } from 'react'
import { cn } from '../../utils/cn'
import { diffButton } from '../../utils/ChoicesSize'
interface iButton {
    buttonName: string,
    className?: any,
    choice: any,
    size: any
}

const Globalbutton: FC<iButton> = ({ buttonName, className, choice, size, ...props }) => {
    return (
        <div>
            <button {...props} className={cn(diffButton({ choice, size }), className)}>
                {buttonName}
            </button>

        </div>
    )
}

export default Globalbutton


