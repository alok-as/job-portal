import { NextResponse } from "next/server";
import prismaDb from "@/lib/prisma";

export const DELETE = async (
	_: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		await prismaDb.application.delete({
			where: { id: params.id },
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Applied Job deleted successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error deleting Applied Job", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error deleting Applied Job",
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
		const appliedJob = await prismaDb.application.findUnique({
			where: { id: params.id },
			select: {
				id: true,
				job: true,
			},
		});

		if (!appliedJob) {
			return NextResponse.json(
				{
					success: false,
					data: appliedJob,
					message: "Applied Job not found",
				},
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{
				success: true,
				data: appliedJob,
				message: "Applied Job fetched successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error fetching Applied Job", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching Applied Job",
			},
			{
				status: 400,
			}
		);
	}
};
