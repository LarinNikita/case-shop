'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { getAuthStatus } from './action'
import { Loader2 } from 'lucide-react'

export default function Page() {
    const router = useRouter()
    const [configId, setConfigId] = useState<string | null>(null)

    useEffect(() => {
        const configurationId = localStorage.getItem('configurationId')
        if (configurationId) setConfigId(configurationId)
    }, [])

    const { data } = useQuery({
        queryKey: ['auth-callback'],
        queryFn: async () => await getAuthStatus(),
        retry: true,
        retryDelay: 500,
    })

    if (data?.success) {
        if (configId) {
            localStorage.removeItem('configurationId')
            router.push(`/configure/preview?id=${configId}`)
        } else {
            router.push('/')
        }
    }

    return (
        <div className="mt-24 flex w-full justify-center">
            <div className="flex flex-col items-center gap-2">
                <Loader2 className="size-8 animate-spin text-zinc-500" />
                <h3 className="text-xl font-semibold">Logging you in...</h3>
                <p>Your will be redirected automatically</p>
            </div>
        </div>
    )
}
