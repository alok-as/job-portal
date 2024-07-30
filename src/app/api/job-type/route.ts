import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

import prismaDb from "@/lib/prisma";
import { createJobTypeSchema } from "@/schema/job-type";

export const POST = async (req: Request) => {
	try {
		const reqData = await req.json();
		const { name } = createJobTypeSchema.parse(reqData);

		await prismaDb.jobType.create({
			data: {
				name,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Job type created successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error creating a job type", error);

		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2002") {
				const model = error?.meta?.modelName;
				const key = error?.meta?.target;

				return NextResponse.json(
					{
						success: false,
						data: null,
						message: `${model} with ${key} already exists`,
					},
					{ status: 409 }
				);
			}
		}

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error creating job type",
			},
			{ status: 400 }
		);
	}
};

export const GET = async (req: Request) => {
	try {
		const jobTypes = await prismaDb.jobType.findMany({
			select: {
				id: true,
				name: true,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: jobTypes,
				message: "Job types fetched successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error fetching job types", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching job types",
			},
			{ status: 400 }
		);
	}
};
