import prismaDb from "@/lib/prisma";
import { isValidMongoId } from "@/utils/mongodb";

export const getJobsCount = () => prismaDb.job.count({});

export const getAllJobs = (params: URLSearchParams) => {
	const industry = params.getAll("industry");
	const level = params.getAll("level");
	const jobType = params.getAll("jobType");
	const remote = params.getAll("remote");

	console.log("industry", industry);

	return prismaDb.job.findMany({
		where: {
			...(industry.length !== 0 && {
				industry: {
					id: {
						in: industry.filter(isValidMongoId),
					},
				},
			}),
			...(level.length !== 0 && {
				level: {
					id: {
						in: level.filter(isValidMongoId),
					},
				},
			}),
			...(jobType.length !== 0 && {
				type: {
					id: {
						in: jobType.filter(isValidMongoId),
					},
				},
			}),
			...(remote.length !== 0 && {
				remote: {
					id: {
						in: remote.filter(isValidMongoId),
					},
				},
			}),
		},
		include: {
			company: true,
			industry: true,
			remote: true,
			skills: true,
		},
	});
};
