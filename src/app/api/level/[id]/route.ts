import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";
import { updateLevelSchema } from "@/schema/level";

export const PATCH = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		const reqData = await req.json();
		const { name } = updateLevelSchema.parse(reqData);

		await prismaDb.level.update({
			where: { id: params.id },
			data: {
				name,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Level updated successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error updating Level", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error updating Level",
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
		await prismaDb.level.delete({
			where: { id: params.id },
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Level deleted successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error deleting Level", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error deleting Level",
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
		const jobType = await prismaDb.level.findUnique({
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
					message: "Level not found",
				},
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{
				success: true,
				data: jobType,
				message: "Level fetched successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error fetching Level", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching Level",
			},
			{
				status: 400,
			}
		);
	}
};
