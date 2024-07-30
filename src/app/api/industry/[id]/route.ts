import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";
import { updateIndustrySchema } from "@/schema/industry";

export const PATCH = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		const reqData = await req.json();
		const { name } = updateIndustrySchema.parse(reqData);

		await prismaDb.industry.update({
			where: { id: params.id },
			data: {
				name,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Industry updated successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error updating industry", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error updating industry",
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
		await prismaDb.industry.delete({
			where: { id: params.id },
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Industry deleted successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error deleting industry", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error deleting industry",
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
		const industry = await prismaDb.industry.findUnique({
			where: { id: params.id },
			select: {
				id: true,
				name: true,
			},
		});

		if (!industry) {
			return NextResponse.json(
				{
					success: false,
					data: industry,
					message: "Industry not found",
				},
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{
				success: true,
				data: industry,
				message: "Industry fetched successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error fetching industry", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching industry",
			},
			{
				status: 400,
			}
		);
	}
};
