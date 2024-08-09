import { PrismaClient, Prisma } from "@prisma/client";
import slugify from "slugify";

declare global {
	var prisma: PrismaClient | undefined;
	interface Window {
		Razorpay: any;
	}
}

const prismaDb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV != "production") globalThis.prisma = prismaDb;

prismaDb.$use(async (params, next) => {
	if (
		(params.action === "create" || params.action === "update") &&
		["Industry", "JobType", "Remote", "Level"].includes(params.model as string)
	) {
		let {
			args: { data },
		} = params;
		data.slug = slugify(`${data.name}`, {
			replacement: "-",
			lower: true,
			trim: true,
		});
	}

	const result = await next(params);
	return result;
});

export default prismaDb;
