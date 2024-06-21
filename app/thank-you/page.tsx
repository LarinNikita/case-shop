import { Suspense } from 'react'
import ThankYou from './_components/ThankYou'

export default function Page() {
    return (
        <Suspense>
            <ThankYou />
        </Suspense>
    )
}
