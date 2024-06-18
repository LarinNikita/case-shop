import React, { HTMLAttributes } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
    return (
        <div
            className={cn(
                'pointer-events-none relative z-50 overflow-hidden',
                className,
            )}
            {...props}
        >
            <Image
                src={
                    dark
                        ? '/icons/phone-template-dark-edges.png'
                        : '/icons/phone-template-white-edges.png'
                }
                alt="phone image"
                width={896}
                height={1831}
                className="pointer-events-none z-50 select-none"
            />
            <div className="absolute inset-0 -z-10">
                <Image
                    src={imgSrc}
                    alt="overlaying phone image"
                    width={896}
                    height={1831}
                    className="min-h-full min-w-full object-cover"
                />
            </div>
        </div>
    )
}

export default Phone
