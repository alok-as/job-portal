import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";
import { updateJobTypeSchema } from "@/schema/job-type";

export const PATCH = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		const reqData = await req.json();
		const { name } = updateJobTypeSchema.parse(reqData);

		await prismaDb.jobType.update({
			where: { id: params.id },
			data: {
				name,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Job Type updated successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error updating Job Type", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error updating Job Type",
			},
			{
				status: 400,
			}
		);
	}
};

export const DELETE = async (
	_: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		await prismaDb.jobType.delete({
			where: { id: params.id },
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Job Type deleted successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error deleting Job Type", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error deleting Job Type",
			},
			{
				status: 400,
			}
		);
	}
};

export const GET = async (
	_: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		const jobType = await prismaDb.jobType.findUnique({
			where: { id: params.id },
			select: {
				id: true,
				name: true,
			},
		});

		if (!jobType) {
			return NextResponse.json(
				{
					success: false,
					data: jobType,
					message: "Job Type not found",
				},
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{
				success: true,
				data: jobType,
				message: "Job Type fetched successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error fetching Job Type", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching Job Type",
			},
			{
				status: 400,
			}
		);
	}
};
