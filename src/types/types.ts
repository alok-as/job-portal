import { Company, Industry, Job, Remote, Skill } from "@prisma/client";

export type JobWithDetails = Job & {
	company: Company;
	remote: Remote;
	industry: Industry;
	skills: Skill[];
};
