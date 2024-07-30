import { z } from "zod";

export const createIndustrySchema = z.object({
	name: z.string().min(3),
});

export type IndustryFields = z.infer<typeof createIndustrySchema>;

export const updateIndustrySchema = z.object({
	name: z.string().min(3),
});
