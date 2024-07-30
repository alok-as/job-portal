import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";
import { updateCandidateSchema } from "@/schema/candidate";

export const PATCH = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		const reqData = await req.json();
		const {
			name,
			bio,
			company,
			contactNumber,
			designation,
			educationLevel,
			portfolioLink,
			profilePic,
			yearsOfExperience,
		} = updateCandidateSchema.parse(reqData);

		await prismaDb.candidate.update({
			where: { id: params.id },
			data: {
				name,
				bio,
				company,
				contactNumber,
				designation,
				educationLevel,
				portfolioLink,
				profilePic,
				yearsOfExperience,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Candidate updated successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error updating candidate", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error updating candidate",
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
		await prismaDb.candidate.delete({
			where: { id: params.id },
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Candidate deleted successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error deleting candidate", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error deleting candidate",
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
		const candidate = await prismaDb.candidate.findUnique({
			where: { id: params.id },
			select: {
				id: true,
				name: true,
				email: true,
				contactNumber: true,
				bio: true,
				yearsOfExperience: true,
				educationLevel: true,
				profilePic: true,
				portfolioLink: true,
				company: true,
				designation: true,
			},
		});

		if (!candidate) {
			return NextResponse.json(
				{
					success: false,
					data: candidate,
					message: "Candidate not found",
				},
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{
				success: true,
				data: candidate,
				message: "Candidate fetched successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error fetching candidate", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching candidate",
			},
			{
				status: 400,
			}
		);
	}
};
