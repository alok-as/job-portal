import prismaDb from "@/lib/prisma";

export const getCandidate = async (email: string) => {
	try {
		const candidate = await prismaDb.candidate.findUnique({
			where: {
				email,
			},
		});

		return candidate;
	} catch (error) {
		console.log("Error finding candidate", error);
		return null;
	}
};
