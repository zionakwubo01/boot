
import { cva } from "class-variance-authority"
const Alertsize = cva(
    "border",
    {
        variants: {
            choices: {
                sm: "w-[400px] py-2 bg-green-500 flex flex-row gap-6",
                big: "w-[500px] py-1 bg-red-800 flex flex-row gap-6"
            },
            size: {
                big: "text-[18px] text-white",
                sm: "text-[15px] text-white"
            }
        }
        ,
        defaultVariants: {
            choices: "sm",
            size: "sm"
        }
    }
)

export default Alertsize