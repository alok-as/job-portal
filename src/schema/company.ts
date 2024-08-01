import { z } from "zod";

export const createCompanySchema = z.object({
	name: z.string().min(3, { message: "Name must be atleast 3 characters" }),
	email: z.string().email({ message: "Invalid email address" }),
	password: z
		.string()
		.min(8, { message: "Password should be atleast 8 characters" }),
	size: z.number().optional(),
	about: z.string().min(10).optional(),
	location: z.string().min(3).optional(),
});

export type CompanyFields = z.infer<typeof createCompanySchema>;

export const updateCompanySchema = z.object({
	name: z.string().min(3).optional(),
	size: z.number().optional(),
	about: z.string().min(10).optional(),
	location: z.string().min(3).optional(),
});
