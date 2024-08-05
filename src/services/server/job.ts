import prismaDb from "@/lib/prisma";

export const getJobsCount = () => prismaDb.job.count({});
