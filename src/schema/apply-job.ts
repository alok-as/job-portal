import { z } from "zod";
import { objectIdSchema } from "./mongodb";

export const createApplyJobSchema = z.object({
	jobId: objectIdSchema,
});

export type ApplyJobFields = z.infer<typeof createApplyJobSchema>;
