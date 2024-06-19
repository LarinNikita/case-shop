'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Rnd } from 'react-rnd'
import { Radio, RadioGroup } from '@headlessui/react'

import { cn } from '@/lib/utils'
import { colors } from '@/constants'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Label } from '@/components/ui/label'
import Handle from './Handle'

interface DesignConfigurationProps {
    configId: string
    imageUrl: string
    imageDimensions: { width: number; height: number }
}

const DesignConfiguration = ({
    configId,
    imageUrl,
    imageDimensions,
}: DesignConfigurationProps) => {
    const [options, setOptions] = useState<{ color: (typeof colors)[number] }>({
        color: colors[0],
    })

    return (
        <div className="relative mb-20 mt-20 grid grid-cols-3 pb-20">
            <div className="relative col-span-2 flex h-[37.5rem] w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                <div className="pointer-events-none relative aspect-[896/1831] w-60 bg-opacity-50">
                    <AspectRatio
                        ratio={896 / 1831}
                        className="pointer-events-none relative z-50 aspect-[896/1831] w-full"
                    >
                        <Image
                            src="/icons/phone-template.png"
                            alt="phone template"
                            fill
                            className="pointer-events-none z-50 select-none"
                        />
                    </AspectRatio>
                    <div className="absolute inset-0 bottom-px left-[3px] right-[3px] top-px z-40 rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
                    <div
                        className={cn(
                            'absolute inset-0 bottom-px left-[3px] right-[3px] top-px rounded-[32px]',
                            `bg-${options.color.tw}`,
                        )}
                    />
                </div>
                <Rnd
                    default={{
                        x: 150,
                        y: 205,
                        width: imageDimensions.width / 4,
                        height: imageDimensions.height / 4,
                    }}
                    lockAspectRatio
                    resizeHandleComponent={{
                        bottomRight: <Handle />,
                        bottomLeft: <Handle />,
                        topRight: <Handle />,
                        topLeft: <Handle />,
                    }}
                    className="absolute z-20 border-[3px] border-primary"
                >
                    <div className="relative size-full">
                        <Image
                            src={imageUrl}
                            alt="your image"
                            fill
                            className="pointer-events-none"
                        />
                    </div>
                </Rnd>
            </div>
            <div className="flex h-[37.5rem] flex-col bg-white">
                {/* todo: fix scroll area overflow */}
                <ScrollArea className="relative flex-1 overflow-auto">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-white"
                    />
                    <div className="px-8 pb-12 pt-8">
                        <h2 className="text-3xl font-bold tracking-tight">
                            Customize your case
                        </h2>
                        <div className="my-6 h-px w-full bg-zinc-200" />
                        <div className="relative mt-4 flex h-full flex-col justify-between">
                            <RadioGroup
                                value={options.color}
                                onChange={val => {
                                    setOptions(prev => ({
                                        ...prev,
                                        color: val,
                                    }))
                                }}
                            >
                                <Label>Color: {options.color.label}</Label>
                                <div className="mt-3 flex items-center space-x-3">
                                    {colors.map(color => (
                                        <Radio
                                            key={color.label}
                                            value={color}
                                            className={({ checked }) =>
                                                cn(
                                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full border-2 border-transparent p-0.5 focus:outline-none focus:ring-0 active:outline-none active:ring-0',
                                                    {
                                                        [`border-${color.tw}`]:
                                                            checked,
                                                    },
                                                )
                                            }
                                        >
                                            <span
                                                className={cn(
                                                    `bg-${color.tw}`,
                                                    'size-8 rounded-full border border-black border-opacity-10',
                                                )}
                                            />
                                        </Radio>
                                    ))}
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default DesignConfiguration
