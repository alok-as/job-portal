import prismaDb from "@/lib/prisma";

export const getAllRemotes = () => prismaDb.remote.findMany({});

export const getRemotesWithJobCount = () =>
	prismaDb.remote.findMany({
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
