import clsx from "clsx"

import { ClassValue } from "class-variance-authority/types"
import { twMerge } from "tailwind-merge"

export const cn = (...input: ClassValue[]) => {
    return twMerge(clsx(input))
}