import prismaDb from "@/lib/prisma";
import { compareHash } from "@/utils/hashing";

export const getCompany = async (email: string, password: string) => {
	try {
		const company = await prismaDb.company.findUnique({
			where: {
				email,
			},
		});
		if (!company) return null;

		const isPasswordCorrect = await compareHash(password, company.password);
		if (!isPasswordCorrect) return null;

		return company;
	} catch (error) {
		console.log("Error finding company", error);
		return null;
	}
};
