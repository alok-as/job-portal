import prismaDb from "@/lib/prisma";

export const getCompany = async (email: string) => {
	try {
		const company = await prismaDb.company.findUnique({
			where: {
				email,
			},
		});

		return company;
	} catch (error) {
		console.log("Error finding company", error);
		return null;
	}
};
