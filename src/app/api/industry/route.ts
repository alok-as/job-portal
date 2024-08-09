import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

import prismaDb from "@/lib/prisma";
import { createIndustrySchema } from "@/schema/industry";
import { getAllIndustries } from "@/services/server/industries";

export const POST = async (req: Request) => {
	try {
		const reqData = await req.json();
		const { name } = createIndustrySchema.parse(reqData);

		await prismaDb.industry.create({
			data: {
				name,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Industry created successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error creating a industry", error);

		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2002") {
				const model = error?.meta?.modelName;
				const key = error?.meta?.target;

				return NextResponse.json(
					{
						success: false,
						data: null,
						message: `${model} with ${key} already exists`,
					},
					{ status: 409 }
				);
			}
		}

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error creating industry",
			},
			{ status: 400 }
		);
	}
};

export const GET = async (req: Request) => {
	try {
		const industries = await getAllIndustries();

		return NextResponse.json(
			{
				success: true,
				data: industries,
				message: "Industries fetched successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error fetching industries", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching industries",
			},
			{ status: 400 }
		);
	}
};
