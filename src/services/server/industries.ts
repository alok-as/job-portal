import prismaDb from "@/lib/prisma";

export const getAllIndustries = () =>
	prismaDb.industry.findMany({
		select: {
			id: true,
			name: true,
			slug: true,
		},
	});

export const getIndustriesWithJobCount = () =>
	prismaDb.industry.findMany({
		select: {
			id: true,
			name: true,
			slug: true,
			_count: {
				select: {
					jobs: true,
				},
			},
		},
	});
