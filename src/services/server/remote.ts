import prismaDb from "@/lib/prisma";

export const getAllRemotes = () =>
	prismaDb.remote.findMany({
		select: {
			id: true,
			name: true,
			slug: true,
		},
	});

export const getRemotesWithJobCount = () =>
	prismaDb.remote.findMany({
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
