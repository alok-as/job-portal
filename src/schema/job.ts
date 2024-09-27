import { z } from "zod";

const objectIdSchema = z.string().regex(/^[0-9a-fA-F]{24}$/);

export const createJobSchema = z.object({
	title: z.string().min(5),
	description: z.string().min(20),

	industryId: objectIdSchema,
	typeId: objectIdSchema,
	remoteId: objectIdSchema,
	levelId: objectIdSchema,

	skillIds: z.array(objectIdSchema),
});

export type JobFields = z.infer<typeof createJobSchema>;

const selectFieldSchema = z.object({
	label: z.string(),
	value: z.string(),
});

export const createJobClientSchema = z.object({
	title: z.string().min(5),
	description: z.string().min(20),

	industryId: selectFieldSchema,
	typeId: selectFieldSchema,
	remoteId: selectFieldSchema,
	levelId: selectFieldSchema,
	skillIds: z.array(selectFieldSchema),
});

export type JobClientFields = z.infer<typeof createJobClientSchema>;

export const updateJobSchema = z.object({
	title: z.string().min(5).optional(),
	description: z.string().min(20).optional(),

	industryId: objectIdSchema.optional(),
	typeId: objectIdSchema.optional(),
	remoteId: objectIdSchema.optional(),
	levelId: objectIdSchema.optional(),

	skillIds: z.array(objectIdSchema).optional(),
});
