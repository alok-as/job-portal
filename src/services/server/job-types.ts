import prismaDb from "@/lib/prisma";

export const getAllJobTypes = () => prismaDb.jobType.findMany({});

export const getJobTypesWithJobCount = () =>
	prismaDb.jobType.findMany({
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
