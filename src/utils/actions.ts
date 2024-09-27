"use server";

import { revalidateTag } from "next/cache";

export const clearCacheByTag = (tag: string) => {
	revalidateTag(tag);
};
