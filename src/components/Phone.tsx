import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface phoneProps extends HTMLAttributes<HTMLDivElement> {
    imageSrc : string
    colorStatus? : boolean
}

const Phone = ({imageSrc, className, colorStatus = false, ...props} : phoneProps) => {
    return (
        <div
        className={cn(
            'relative pointer-events-none overflow-hidden z-50',
            className
        )}
        {...props}
        >
            <img
            src={
                colorStatus 
                ? '/phone-template-dark-edges.png'
                : '/phone-template-white-edges.png'
            }
            className="pointer-events-none select-none z-50"
            alt="phone image"
            />

            <div className="absolute -z-10 top-0 inset-0">
                <img
                src={imageSrc}
                className="min-h-full min-w-full object-cover"
                alt="overlaying phone image" 
                />
            </div>

        </div>
    )
}

export default Phone