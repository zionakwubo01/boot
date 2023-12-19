import clsx, { ClassValue } from "clsx";
import { cn } from "../../utils/cn";
import { twMerge } from "tailwind-merge";


export const Alertcn = (...input: ClassValue[]) => {
    return twMerge(clsx(input))
}