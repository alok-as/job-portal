import { z } from "zod";
import validator from "validator";

export const createCandidateSchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(8),
});

export type candidateFields = z.infer<typeof createCandidateSchema>;

export const updateCandidateSchema = z.object({
	name: z.string().min(3).optional(),
	contactNumber: z
		.string()
		.refine((value) => validator.isMobilePhone(value, "en-IN"))
		.optional(),

	bio: z.string().min(10).optional(),
	yearsOfExperience: z.number().optional(),
	educationLevel: z.string().optional(),

	portfolioLink: z.string().optional(),
	profilePic: z.string().optional(),

	company: z.string().optional(),
	designation: z.string().optional(),
});
