import { z } from "zod";

const objectIdSchema = z.string().regex(/^[0-9a-fA-F]{24}$/);

export const createApplyJobSchema = z.object({
	jobId: objectIdSchema,
});

export type ApplyJobFields = z.infer<typeof createApplyJobSchema>;
