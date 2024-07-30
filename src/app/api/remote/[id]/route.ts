import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";
import { updateRemoteSchema } from "@/schema/remote";

export const PATCH = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		const reqData = await req.json();
		const { name } = updateRemoteSchema.parse(reqData);

		await prismaDb.remote.update({
			where: { id: params.id },
			data: {
				name,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Remote updated successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error updating Remote", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error updating Remote",
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
		await prismaDb.remote.delete({
			where: { id: params.id },
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Remote deleted successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error deleting Remote", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error deleting Remote",
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
		const jobType = await prismaDb.remote.findUnique({
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
					message: "Remote not found",
				},
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{
				success: true,
				data: jobType,
				message: "Remote fetched successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error fetching Remote", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching Remote",
			},
			{
				status: 400,
			}
		);
	}
};
