import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";
import { generateHash } from "@/utils/hashing";
import { createCandidateSchema } from "@/schema/candidate";

export const POST = async (req: Request) => {
	try {
		const reqData = await req.json();
		const { name, email, password } = createCandidateSchema.parse(reqData);

		const hashedPassword = await generateHash(password);
		await prismaDb.candidate.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Candidate created successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error creating a candidate", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error creating candidate",
			},
			{ status: 400 }
		);
	}
};

export const GET = async (req: Request) => {
	try {
		const candidates = await prismaDb.candidate.findMany({
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

		return NextResponse.json(
			{
				success: true,
				data: candidates,
				message: "Candidates fetched successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error fetching candidates", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching candidates",
			},
			{ status: 400 }
		);
	}
};
