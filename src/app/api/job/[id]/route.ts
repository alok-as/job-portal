import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";
import { updateJobSchema } from "@/schema/job";

export const PATCH = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		const reqData = await req.json();
		const {
			title,
			description,
			industryId,
			levelId,
			remoteId,
			typeId,
			skillIds,
		} = updateJobSchema.parse(reqData);

		await prismaDb.job.update({
			where: { id: params.id },
			data: {
				title,
				description,
				industryId,
				levelId,
				remoteId,
				typeId,
				skillIds,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Job updated successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error updating Job", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error updating Job",
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
		await prismaDb.job.delete({
			where: { id: params.id },
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Job deleted successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error deleting Job", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error deleting Job",
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
		const job = await prismaDb.job.findUnique({
			where: { id: params.id },
			select: {
				id: true,
				title: true,
				description: true,
				industry: true,
				level: true,
				type: true,
				remote: true,
				skills: true,
			},
		});

		if (!job) {
			return NextResponse.json(
				{
					success: false,
					data: job,
					message: "Job not found",
				},
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{
				success: true,
				data: job,
				message: "Job fetched successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error fetching Job", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching Job",
			},
			{
				status: 400,
			}
		);
	}
};
