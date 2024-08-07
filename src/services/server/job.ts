import prismaDb from "@/lib/prisma";

export const getJobsCount = () => prismaDb.job.count({});

export const getAllJobs = () =>
	prismaDb.job.findMany({
		include: {
			company: true,
			industry: true,
			remote: true,
			skills: true,
		},
	});
