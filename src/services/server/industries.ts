import prismaDb from "@/lib/prisma";

export const getAllIndustries = () => prismaDb.industry.findMany({});

export const getIndustriesWithJobCount = () =>
	prismaDb.industry.findMany({
		select: {
			id: true,
			name: true,
			_count: {
				select: {
					jobs: true,
				},
			},
		},
	});
