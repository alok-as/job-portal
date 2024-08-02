import { z } from "zod";

const envSchema = z.object({
	DATABASE_URL: z.string().url(),
	DATABASE_USER: z.string(),
	DATABASE_PASSWORD: z.string(),
	GOOGLE_ID: z.string(),
	GOOGLE_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
