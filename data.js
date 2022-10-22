//TODO resize shake images

import { v4 as uuidv4 } from 'https://jspm.dev/uuid'
export const shakeList = [
    {
        name: `Mango Monster Mayhem`,
        image: `./images/mango.jpg`,
        description: `Ever had a dream where your mangoes came to life, and wrecked your house?.... Neither have I...`,
        ingredients: `Mangoes, mayhem, maybe some monsters...`,
        price: 4.99,
        uuid: uuidv4()
    },
    {
        name: `Berry Boom Bringer`,
        image: `./images/berry.jpg`,
        description: `Like a bomb strapped to a warhammer, this shake will bring some BOOM into your life!`,
        ingredients: `BOOM`,
        price: 4.99,
        uuid: uuidv4()
    },
    {
        name: `Fruity Face Flattener`,
        image: `./images/fruity.jpg`,
        description: `Have a convex face? Flatten it with our patented face flattening shake device!`,
        ingredients: `Signature flattening fruits`,
        price: 4.99,
        uuid: uuidv4()
    }
]