import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url(),
		DATABASE_USER: z.string(),
		DATABASE_PASSWORD: z.string(),
		GOOGLE_ID: z.string(),
		GOOGLE_SECRET: z.string(),
	},
	experimental__runtimeEnv: {},
});
