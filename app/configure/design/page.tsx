import { db } from '@/db'
import { notFound } from 'next/navigation'

import DesignConfiguration from './_components/DesignConfiguration'

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
        where: {
            id,
        },
    })

    if (!configuration) {
        return notFound()
    }

    const { imageUrl, width, height } = configuration

    return (
        <DesignConfiguration
            configId={configuration.id}
            imageUrl={imageUrl}
            imageDimensions={{
                width,
                height,
            }}
        />
    )
}
