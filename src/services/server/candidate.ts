import prismaDb from "@/lib/prisma";
import { compareHash } from "@/utils/hashing";

export const getCandidate = async (email: string, password: string) => {
	try {
		const candidate = await prismaDb.candidate.findUnique({
			where: {
				email,
			},
		});
		if (!candidate) return null;

		const isPasswordCorrect = await compareHash(password, candidate.password);
		if (!isPasswordCorrect) return null;

		return candidate;
	} catch (error) {
		console.log("Error finding candidate", error);
		return null;
	}
};
