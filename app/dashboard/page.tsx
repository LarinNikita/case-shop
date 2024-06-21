import { notFound } from 'next/navigation'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import StatusDropdown from './_components/StatusDropdown'

import { db } from '@/db'

import { formatPrice } from '@/lib/utils'

import { Progress } from '@/components/ui/progress'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

export default async function Page() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL

    if (!user || user.email !== ADMIN_EMAIL) {
        return notFound()
    }

    const orders = await db.order.findMany({
        where: {
            isPaid: true,
            createdAt: {
                gte: new Date(new Date().setDate(new Date().getDate() - 7)),
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            user: true,
            shippingAddress: true,
        },
    })

    const lastWeek = await db.order.aggregate({
        where: {
            isPaid: true,
            createdAt: {
                gte: new Date(new Date().setDate(new Date().getDate() - 7)),
            },
        },
        _sum: {
            amount: true,
        },
    })

    const lastMouth = await db.order.aggregate({
        where: {
            isPaid: true,
            createdAt: {
                gte: new Date(new Date().setDate(new Date().getDate() - 30)),
            },
        },
        _sum: {
            amount: true,
        },
    })

    const WEEKLY_GOAL = 500
    const MOUTH_GOAL = 2500

    return (
        <div className="flex min-h-screen w-full bg-muted/40">
            <div className="mx-auto flex w-full max-w-7xl flex-col sm:gap-4 sm:py-4">
                <div className="flex flex-col gap-16">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardDescription>Last Week</CardDescription>
                                <CardTitle className="text-4xl">
                                    {formatPrice(lastWeek._sum.amount ?? 0)}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm text-muted-foreground">
                                    of {formatPrice(WEEKLY_GOAL)} goal
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Progress
                                    value={
                                        ((lastWeek._sum.amount ?? 0) * 100) /
                                        WEEKLY_GOAL
                                    }
                                />
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardDescription>Last Mouth</CardDescription>
                                <CardTitle className="text-4xl">
                                    {formatPrice(lastMouth._sum.amount ?? 0)}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm text-muted-foreground">
                                    of {formatPrice(MOUTH_GOAL)} goal
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Progress
                                    value={
                                        ((lastMouth._sum.amount ?? 0) * 100) /
                                        MOUTH_GOAL
                                    }
                                />
                            </CardFooter>
                        </Card>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">
                        Incoming orders
                    </h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead className="hidden sm:table-cell">
                                    Status
                                </TableHead>
                                <TableHead className="hidden sm:table-cell">
                                    Purchase date
                                </TableHead>
                                <TableHead className="text-right">
                                    Amount
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map(order => (
                                <TableRow key={order.id} className="bg-accent">
                                    <TableCell>
                                        <div className="font-medium">
                                            {order.shippingAddress?.name}
                                        </div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            {order.user.email}
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <StatusDropdown
                                            id={order.id}
                                            orderStatus={order.status}
                                        />
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        {order.createdAt.toLocaleDateString()}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {formatPrice(order.amount)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
