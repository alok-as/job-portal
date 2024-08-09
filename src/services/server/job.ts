import prismaDb from "@/lib/prisma";

export const getJobsCount = () => prismaDb.job.count({});

export const getAllJobs = (params: URLSearchParams) => {
	const industry = params.getAll("industry");
	const level = params.getAll("level");
	const jobType = params.getAll("jobType");
	const remote = params.getAll("remote");
	const search = params.get("search");

	return prismaDb.job.findMany({
		where: {
			OR: [
				{
					title: {
						contains: search ?? "",
						mode: "insensitive",
					},
				},
				{
					description: {
						contains: search ?? "",
						mode: "insensitive",
					},
				},
				{
					company: {
						name: { contains: search ?? "", mode: "insensitive" },
					},
				},
			],
			...(industry.length !== 0 && {
				industry: {
					slug: {
						in: industry,
					},
				},
			}),
			...(level.length !== 0 && {
				level: {
					slug: {
						in: level,
					},
				},
			}),
			...(jobType.length !== 0 && {
				type: {
					slug: {
						in: jobType,
					},
				},
			}),
			...(remote.length !== 0 && {
				remote: {
					slug: {
						in: remote,
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
