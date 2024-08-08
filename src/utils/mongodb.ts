import { objectIdSchema } from "@/schema/mongodb";

export const isValidMongoId = (id: string): boolean => {
	try {
		objectIdSchema.parse(id);
		return true;
	} catch (error) {
		return false;
	}
};
