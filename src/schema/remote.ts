import { z } from "zod";

export const createRemoteSchema = z.object({
	name: z.string().min(3),
});

export type RemoteFields = z.infer<typeof createRemoteSchema>;

export const updateRemoteSchema = z.object({
	name: z.string().min(3),
});
