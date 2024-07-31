import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";
import { createSaveJobSchema } from "@/schema/save-job";

export const POST = async (req: Request) => {
	try {
		const reqData = await req.json();
		const { jobId } = createSaveJobSchema.parse(reqData);

		await prismaDb.savedJob.create({
			data: {
				jobId,
				candidateId: "66a896763703657e569ff0ca",
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Job saved successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error saving Job", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error saving Job",
			},
			{ status: 400 }
		);
	}
};

export const GET = async (req: Request) => {
	try {
		const jobs = await prismaDb.savedJob.findMany({
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
				message: "Saved Jobs fetched successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error fetching Saved Jobs", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching Saved Jobs",
			},
			{ status: 400 }
		);
	}
};
