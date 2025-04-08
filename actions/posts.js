'use server';

import { revalidateTag } from "next/cache";

export const handleUpdateTag = async (tag) => {
    revalidateTag(tag);
};

