import { z } from "zod";

const objectIdSchema = z.string().regex(/^[0-9a-fA-F]{24}$/);

export const createSaveJobSchema = z.object({
	jobId: objectIdSchema,
});

export type SaveJobFields = z.infer<typeof createSaveJobSchema>;
