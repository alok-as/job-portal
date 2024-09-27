import prismaDb from "@/lib/prisma";

export const getAllSkills = () => prismaDb.skill.findMany({});
