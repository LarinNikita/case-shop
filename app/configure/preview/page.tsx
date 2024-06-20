import { notFound } from 'next/navigation'

import { db } from '@/db'

import DesignPreview from './_components/DesignPreview'

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export default async function Page({ searchParams }: PageProps) {
    const { id } = searchParams

    if (!id || typeof id !== 'string') {
        return notFound()
    }

    const configuration = await db.configuration.findUnique({
        where: { id },
    })

    if (!configuration) {
        return notFound()
    }

    return <DesignPreview configuration={configuration} />
}
