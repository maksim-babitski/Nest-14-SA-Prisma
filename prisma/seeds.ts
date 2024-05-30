import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const initialPosts = [
    {
        title: 'Post 1',
        body: 'content 1',
    },
    {
        title: 'Post 2',
        body: 'content 2',
    },
    {
        title: 'Post 3',
        body: 'content 3',
    },
]

const seed = async () => {
    await prisma.post.deleteMany()

    for (const post of initialPosts) {
        await prisma.post.create({
            data: post,
        })
    }
}

seed()