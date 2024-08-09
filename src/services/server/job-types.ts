import prismaDb from "@/lib/prisma";

export const getAllJobTypes = () =>
	prismaDb.jobType.findMany({
		select: {
			id: true,
			name: true,
			slug: true,
		},
	});

export const getJobTypesWithJobCount = () =>
	prismaDb.jobType.findMany({
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
