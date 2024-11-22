"use server";

import { db } from "@/server";

export const getPosts = async () => {
    const post = await db.query.posts.findMany()
};
