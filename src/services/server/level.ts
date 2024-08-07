import prismaDb from "@/lib/prisma";

export const getAllLevels = () => prismaDb.level.findMany({});

export const getLevelsWithJobCount = () =>
	prismaDb.level.findMany({
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
