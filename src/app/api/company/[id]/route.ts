import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";
import { updateCompanySchema } from "@/schema/company";

export const PATCH = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		const reqData = await req.json();
		const { name, about, location, size } = updateCompanySchema.parse(reqData);

		const company = await prismaDb.company.update({
			where: { id: params.id },
			data: { name, about, location, size },
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Company updated successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error updating company", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error updating company",
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
		await prismaDb.company.delete({
			where: { id: params.id },
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Company deleted successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error deleting company", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error deleting company",
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
		const company = await prismaDb.company.findUnique({
			where: { id: params.id },
			select: {
				id: true,
				name: true,
				email: true,
				about: true,
				size: true,
				location: true,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: company,
				message: "Company fetched successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error fetching company", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching company",
			},
			{
				status: 400,
			}
		);
	}
};
