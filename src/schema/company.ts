import { z } from "zod";

export const createCompanySchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(8),
	size: z.number(),
	about: z.string().min(10),
	location: z.string().min(3),
});

export type companyFields = z.infer<typeof createCompanySchema>;

export const updateCompanySchema = z.object({
	name: z.string().min(3).optional(),
	size: z.number().optional(),
	about: z.string().min(10).optional(),
	location: z.string().min(3).optional(),
});
