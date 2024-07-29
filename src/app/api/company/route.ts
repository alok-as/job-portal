import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";
import { generateHash } from "@/utils/hashing";
import { createCompanySchema } from "@/schema/company";

export const POST = async (req: Request) => {
	try {
		const reqData = await req.json();
		const { name, email, password, about, location, size } =
			createCompanySchema.parse(reqData);

		const hashedPassword = await generateHash(password);

		await prismaDb.company.create({
			data: {
				name,
				email,
				password: hashedPassword,
				about,
				location,
				size,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Company created successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error creating a company", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error creating company",
			},
			{ status: 400 }
		);
	}
};

export const GET = async (req: Request) => {
	try {
		const companies = await prismaDb.company.findMany({
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
				data: companies,
				message: "Companies fetched successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error fetching companies", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching companies",
			},
			{ status: 400 }
		);
	}
};
