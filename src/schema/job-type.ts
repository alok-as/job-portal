import { z } from "zod";

export const createJobTypeSchema = z.object({
	name: z.string().min(3),
});

export type JobTypeFields = z.infer<typeof createJobTypeSchema>;

export const updateJobTypeSchema = z.object({
	name: z.string().min(3),
});
