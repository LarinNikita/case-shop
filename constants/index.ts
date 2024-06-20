import { PRODUCT_PRICES } from './config/products'

export const USERS = [
    {
        id: 1,
        src: '/users/user-1.png',
    },
    {
        id: 2,
        src: '/users/user-2.png',
    },
    {
        id: 3,
        src: '/users/user-3.png',
    },
    {
        id: 4,
        src: '/users/user-4.png',
    },
    {
        id: 5,
        src: '/users/user-5.png',
    },
]

export const CASES = [
    '/covers/cover-1.jpg',
    '/covers/cover-2.jpg',
    '/covers/cover-3.jpg',
    '/covers/cover-4.jpg',
    '/covers/cover-5.jpg',
    '/covers/cover-6.jpg',
]

export const COLORS = [
    {
        label: 'Black',
        value: 'black',
        tw: 'zinc-900',
    },
    {
        label: 'Blue',
        value: 'blue',
        tw: 'blue-950',
    },
    {
        label: 'Rose',
        value: 'rose',
        tw: 'rose-900',
    },
    {
        label: 'Green',
        value: 'green',
        tw: 'emerald-950',
    },
] as const

export const MODELS = {
    name: 'models',
    options: [
        {
            label: 'iPhone X',
            value: ' iphonex',
        },
        {
            label: 'iPhone 11',
            value: 'iphone11',
        },
        {
            label: 'iPhone 12',
            value: 'iphone12',
        },
        {
            label: 'iPhone 13',
            value: 'iphone13',
        },
        {
            label: 'iPhone 14',
            value: 'iphone14',
        },
        {
            label: 'iPhone 15',
            value: 'iphone15',
        },
    ],
} as const

export const MATERIALS = {
    name: 'material',
    options: [
        {
            label: 'Silicone',
            value: 'silicone',
            description: undefined,
            price: PRODUCT_PRICES.material.silicone,
        },
        {
            label: 'Soft Polycarbonate',
            value: 'polycarbonate',
            description: 'Scratch-resistant coating',
            price: PRODUCT_PRICES.material.polycarbonate,
        },
    ],
} as const

export const FINISHES = {
    name: 'finish',
    options: [
        {
            label: 'Smooth Finish',
            value: 'smooth',
            description: undefined,
            price: PRODUCT_PRICES.finish.smooth,
        },
        {
            label: 'Textured Finish',
            value: 'textured',
            description: 'Soft grippy texture',
            price: PRODUCT_PRICES.finish.textured,
        },
    ],
} as const
