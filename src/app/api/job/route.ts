import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";

import { getAllJobs } from "@/services/server/job";
import { createJobSchema } from "@/schema/job";

export const POST = async (req: Request) => {
	try {
		const reqData = await req.json();
		const {
			title,
			description,
			typeId,
			industryId,
			levelId,
			remoteId,
			skillIds,
		} = createJobSchema.parse(reqData);

		await prismaDb.job.create({
			data: {
				title,
				description,
				typeId,
				industryId,
				levelId,
				remoteId,
				skillIds,
				companyId: "66a7d35e0ac9813765ff5a07",
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Job created successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error creating a Job", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error creating Job",
			},
			{ status: 400 }
		);
	}
};

export const GET = async (req: Request) => {
	try {
		const { searchParams } = new URL(req.url);
		const jobs = await getAllJobs(searchParams);

		return NextResponse.json(
			{
				success: true,
				data: jobs,
				message: "Jobs fetched successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error fetching Jobs", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching Jobs",
			},
			{ status: 400 }
		);
	}
};
