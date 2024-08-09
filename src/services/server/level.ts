import prismaDb from "@/lib/prisma";

export const getAllLevels = () =>
	prismaDb.level.findMany({
		select: {
			id: true,
			name: true,
			slug: true,
		},
	});

export const getLevelsWithJobCount = () =>
	prismaDb.level.findMany({
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
