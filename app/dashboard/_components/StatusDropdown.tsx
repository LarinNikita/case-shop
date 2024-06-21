'use client'

import React from 'react'

import { useRouter } from 'next/navigation'
import { OrderStatus } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Record } from '@prisma/client/runtime/library'

import { cn } from '@/lib/utils'

import { changeOrderStatus } from '../action'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
    awaiting_shipment: 'Awaiting Shipment',
    shipped: 'Shipped',
    fulfilled: 'Fulfilled',
}

const StatusDropdown = ({
    id,
    orderStatus,
}: {
    id: string
    orderStatus: OrderStatus
}) => {
    const router = useRouter()

    const { mutate } = useMutation({
        mutationKey: ['change-order-status'],
        mutationFn: changeOrderStatus,
        onSuccess: () => {
            router.refresh()
        },
    })
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="flex w-52 items-center justify-between"
                >
                    {LABEL_MAP[orderStatus]}
                    <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-0">
                {Object.keys(OrderStatus).map(status => (
                    <DropdownMenuItem
                        key={status}
                        onClick={() =>
                            mutate({ id, newStatus: status as OrderStatus })
                        }
                        className={cn(
                            'flex cursor-default items-center gap-1 p-2.5 text-sm hover:bg-zinc-100',
                            {
                                'bg-zinc-100': orderStatus === status,
                            },
                        )}
                    >
                        <Check
                            className={cn(
                                'mr-2 size-4 text-primary',
                                orderStatus === status
                                    ? 'opacity-100'
                                    : 'opacity-0',
                            )}
                        />
                        {LABEL_MAP[status as keyof typeof OrderStatus]}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default StatusDropdown
