import { z } from "zod";

export const createSkillSchema = z.object({
	name: z.string().min(3),
});

export type SkillFields = z.infer<typeof createSkillSchema>;

export const updateSkillSchema = z.object({
	name: z.string().min(3),
});
