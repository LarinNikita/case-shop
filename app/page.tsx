import Image from 'next/image'
import { ArrowRight, Check, Star } from 'lucide-react'
import Link from 'next/link'

import { users } from '@/constants'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Phone from '@/components/Phone'
import { Icons } from '@/components/Icons'
import UserReview from '@/components/UserReview'
import Reviews from '@/components/Reviews'
import { buttonVariants } from '@/components/ui/button'

export default function Home() {
    return (
        <div className="bg-slate-50">
            <section>
                <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
                    <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
                        <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
                            <div className="absolute -top-20 left-0 hidden w-28 lg:block">
                                <Image
                                    src="/snake-1.png"
                                    alt="logo"
                                    width={112}
                                    height={112}
                                    className="w-full"
                                />
                            </div>
                            <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                                Your Image on a{' '}
                                <span className="rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-2 text-white shadow-md">
                                    Custom
                                </span>{' '}
                                Phone Case
                            </h1>
                            <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
                                Capture your favorite memories with your own,{' '}
                                <span className="font-semibold">
                                    one-of-one
                                </span>{' '}
                                phone case. CaseCobra allows your to protect
                                your memories, not just your phone case.
                            </p>
                            <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
                                <div className="space-y-2">
                                    <li className="flex items-center gap-1.5 text-left">
                                        <Check className="size-5 shrink-0 text-green-600" />
                                        High-quality, durable material
                                    </li>
                                    <li className="flex items-center gap-1.5 text-left">
                                        <Check className="size-5 shrink-0 text-green-600" />
                                        5 year print guarantee
                                    </li>
                                    <li className="flex items-center gap-1.5 text-left">
                                        <Check className="size-5 shrink-0 text-green-600" />
                                        Modern iPhone models supported
                                    </li>
                                </div>
                            </ul>
                            <div className="mt-12 flex flex-col items-center gap-5">
                                <div className="flex -space-x-4">
                                    {users.map(user => (
                                        <Image
                                            key={user.id}
                                            src={user.src}
                                            alt={`image ${user.id}`}
                                            width={40}
                                            height={40}
                                            className="inline-block rounded-full object-cover ring-2 ring-slate-100"
                                        />
                                    ))}
                                </div>
                                <div className="flex flex-col items-center justify-between">
                                    <div className="flex gap-0.5">
                                        {Array.from(
                                            { length: 5 },
                                            (_, index) => (
                                                <Star
                                                    key={index}
                                                    className="size-4 fill-green-600 text-green-600"
                                                />
                                            ),
                                        )}
                                    </div>
                                    <p>
                                        <span className="font-semibold">
                                            1.250
                                        </span>{' '}
                                        happy customers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
                        <div className="relative md:max-w-xl">
                            <Image
                                src="/icons/your-image.png"
                                alt="your image"
                                width={619}
                                height={428}
                                className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
                            />
                            <Image
                                src="/icons/line.png"
                                alt="line"
                                width={339}
                                height={608}
                                className="absolute -bottom-6 -left-6 w-20 select-none"
                            />
                            <Phone
                                imgSrc="/covers/cover-1.jpg"
                                className="w-64"
                            />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="bg-slate-100 py-24">
                <MaxWidthWrapper className="flex flex-col items-center gap-16">
                    <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
                        <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
                            What our{' '}
                            <span className="relative px-2">
                                customers
                                <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-5 hidden text-green-500 sm:block" />
                            </span>{' '}
                            say
                        </h2>
                        <Image
                            src="/snake-2.png"
                            alt="snake"
                            width={96}
                            height={96}
                            className="order-0 lg:order-2"
                        />
                    </div>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <UserReview
                            countStarts={5}
                            text='"The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and the image is super clear, on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it."'
                            highlight="the image is super clear"
                            userImage="/users/user-2.png"
                            userName="Jonathan"
                        />
                        <UserReview
                            countStarts={5}
                            text='"I usually keep my phone together with my keys in my pocket
                  and that led to some pretty heavy scratchmarks on all of my
                  last phone cases. This one, besides a barely noticeable
                  scratch on the corner, looks brand new after about half a year. I dig it."'
                            highlight="looks brand new after about half a year"
                            userImage="/users/user-4.png"
                            userName="Ella"
                        />
                    </div>
                </MaxWidthWrapper>
                <div className="pt-16">
                    <Reviews />
                </div>
            </section>
            <section>
                <MaxWidthWrapper className="py-24">
                    <div className="mb-12 px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl sm:text-center">
                            <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
                                Upload your photo and get{' '}
                                <span className="rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-2 text-white">
                                    your own case
                                </span>{' '}
                                now
                            </h2>
                        </div>
                    </div>
                    <div className="mx-auto max-w-6xl px-6 lg:px-8">
                        <div className="relative flex grid-cols-2 flex-col items-center gap-40 md:grid">
                            <Image
                                src="/icons/arrow.png"
                                alt="arrow"
                                width={126}
                                height={31}
                                className="absolute left-1/2 top-[25rem] z-10 -translate-x-1/2 -translate-y-1/2 rotate-90 md:top-1/2 md:rotate-0"
                            />
                            <div className="relative h-80 w-full max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 md:h-full md:justify-self-end lg:rounded-2xl">
                                <Image
                                    src="/images/horse_and_woman.jpg"
                                    alt="horse"
                                    width={200}
                                    height={490}
                                    className="size-full rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10"
                                />
                            </div>
                            <Phone
                                imgSrc="/images/phone_horse.png"
                                className="w-60"
                            />
                        </div>
                    </div>
                    <ul className="mx-auto mt-12 w-fit max-w-prose space-y-2 sm:text-lg">
                        <li className="w-fit">
                            <Check className="mr-1.5 inline size-5 text-green-600" />
                            High-quality silicon material
                        </li>
                        <li className="w-fit">
                            <Check className="mr-1.5 inline size-5 text-green-600" />
                            Scratch- and fingerprint resistant coating
                        </li>
                        <li className="w-fit">
                            <Check className="mr-1.5 inline size-5 text-green-600" />
                            Wireless charging compatible
                        </li>
                        <li className="w-fit">
                            <Check className="mr-1.5 inline size-5 text-green-600" />
                            5 year print warranty
                        </li>
                        <div className="flex justify-center">
                            <Link
                                href="/configure/upload"
                                className={buttonVariants({
                                    size: 'lg',
                                    className: 'mx-auto mt-8',
                                })}
                            >
                                Create your case now{' '}
                                <ArrowRight className="ml-1.5 size-4" />
                            </Link>
                        </div>
                    </ul>
                </MaxWidthWrapper>
            </section>
        </div>
    )
}
