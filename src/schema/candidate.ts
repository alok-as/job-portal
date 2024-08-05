import { z } from "zod";
import validator from "validator";

export const createCandidateSchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(8),
});

export type CandidateFields = z.infer<typeof createCandidateSchema>;

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


export const loginCandidateSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	password: z
		.string()
		.min(8, { message: "Password should be atleast 8 characters" }),
});

export type CandidateLoginFields = z.infer<typeof loginCandidateSchema>;