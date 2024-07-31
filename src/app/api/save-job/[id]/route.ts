import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";

export const DELETE = async (
	_: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		await prismaDb.savedJob.delete({
			where: { id: params.id },
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Saved Job deleted successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error deleting Saved Job", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error deleting Saved Job",
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
		const savedJob = await prismaDb.savedJob.findUnique({
			where: { id: params.id },
			select: {
				id: true,
				job: true,
			},
		});

		if (!savedJob) {
			return NextResponse.json(
				{
					success: false,
					data: savedJob,
					message: "Saved Job not found",
				},
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{
				success: true,
				data: savedJob,
				message: "Saved Job fetched successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error fetching Saved Job", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching Saved Job",
			},
			{
				status: 400,
			}
		);
	}
};
