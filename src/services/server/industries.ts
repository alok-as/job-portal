import prismaDb from "@/lib/prisma";

export const getAllIndustries = () => prismaDb.industry.findMany({});
