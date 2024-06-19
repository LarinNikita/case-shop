import React from 'react'
import Image from 'next/image'
import { Check, Star } from 'lucide-react'

interface UserReviewProps {
    countStarts: number
    text: string
    highlight: string
    userImage: string
    userName: string
}

const highlightText = (text: string, highlight: string): string => {
    if (!highlight) return text

    return text.replace(
        new RegExp(`(${highlight})`, 'gi'),
        '<span class="bg-gradient-to-r from-slate-700 to-slate-900 px-1 py-0.5 text-white rounded-sm">$1</span>',
    )
}

const UserReview = ({
    countStarts,
    text,
    highlight,
    userImage,
    userName,
}: UserReviewProps) => {
    return (
        <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="mb-2 flex gap-0.5">
                {Array.from({ length: 5 }, (_, index) =>
                    index < countStarts ? (
                        <Star
                            key={index}
                            className="size-5 fill-green-600 text-green-600"
                        />
                    ) : (
                        <Star key={index} className="size-5 text-green-600" />
                    ),
                )}
            </div>
            <div className="text-lg leading-8">
                <p
                    dangerouslySetInnerHTML={{
                        __html: highlightText(text, highlight),
                    }}
                />
            </div>
            <div className="mt-2 flex gap-4">
                <Image
                    src={userImage}
                    alt={userName}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <p className="font-semibold">{userName}</p>
                    <div className="flex items-center gap-1.5 text-zinc-600">
                        <Check className="size-4 stroke-[3px] text-green-600" />
                        <p className="text-sm">Verified Purchase</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserReview
