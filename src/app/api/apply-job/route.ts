import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";
import { createApplyJobSchema } from "@/schema/apply-job";

export const POST = async (req: Request) => {
	try {
		const reqData = await req.json();
		const { jobId } = createApplyJobSchema.parse(reqData);

		await prismaDb.application.create({
			data: {
				jobId,
				candidateId: "66a896763703657e569ff0ca",
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Job applied successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error applying to Job", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error applying to Job",
			},
			{ status: 400 }
		);
	}
};

export const GET = async (req: Request) => {
	try {
		const jobs = await prismaDb.application.findMany({
			select: {
				id: true,
				job: {
					select: {
						id: true,
						title: true,
						description: true,
						industry: true,
						type: true,
						remote: true,
						level: true,
						skills: {
							select: {
								id: true,
								name: true,
							},
						},
						company: {
							select: {
								id: true,
								name: true,
								size: true,
								about: true,
								location: true,
							},
						},
					},
				},
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: jobs,
				message: "Applied Jobs fetched successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error fetching Applied Jobs", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching Applied Jobs",
			},
			{ status: 400 }
		);
	}
};
