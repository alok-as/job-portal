import { z } from "zod";

export const createLevelSchema = z.object({
	name: z.string().min(3),
});

export type LevelFields = z.infer<typeof createLevelSchema>;

export const updateLevelSchema = z.object({
	name: z.string().min(3),
});
