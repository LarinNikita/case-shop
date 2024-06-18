import React from 'react'
import Link from 'next/link'

import MaxWidthWrapper from './MaxWidthWrapper'

import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
    const user = undefined // todo Replace with actual user data
    const isAdmin = false // todo Replace with actual user data

    return (
        <nav className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/" className="z-40 flex font-semibold">
                        case <span className="text-green-600">cobra</span>
                    </Link>
                    <div className="flex h-full items-center space-x-4">
                        {user ? (
                            <>
                                <Link
                                    href="/api/auth/logout"
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost',
                                    })}
                                >
                                    Sign out
                                </Link>
                                {isAdmin ? (
                                    <Link
                                        href="/api/auth/logout"
                                        className={buttonVariants({
                                            size: 'sm',
                                            variant: 'ghost',
                                        })}
                                    >
                                        Dashboard ✨
                                    </Link>
                                ) : null}
                                <Link
                                    href="/configure/upload"
                                    className={buttonVariants({
                                        size: 'sm',
                                        className:
                                            'hidden items-center gap-1 sm:flex',
                                    })}
                                >
                                    Create case
                                    <ArrowRight className="ml-1.5 size-5" />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/api/auth/register"
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost',
                                    })}
                                >
                                    Sign up
                                </Link>
                                <Link
                                    href="/api/auth/login"
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost',
                                    })}
                                >
                                    Login
                                </Link>
                                <div className="hidden h-8 w-px bg-zinc-200 sm:block" />
                                <Link
                                    href="/configure/upload"
                                    className={buttonVariants({
                                        size: 'sm',
                                        className:
                                            'hidden items-center gap-1 sm:flex',
                                    })}
                                >
                                    Create case
                                    <ArrowRight className="ml-1.5 size-5" />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar
