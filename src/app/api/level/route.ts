import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

import prismaDb from "@/lib/prisma";
import { createLevelSchema } from "@/schema/level";

export const POST = async (req: Request) => {
	try {
		const reqData = await req.json();
		const { name } = createLevelSchema.parse(reqData);

		await prismaDb.level.create({
			data: {
				name,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Level created successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error creating a Level", error);

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
				message: "Error creating Level",
			},
			{ status: 400 }
		);
	}
};

export const GET = async (req: Request) => {
	try {
		const jobTypes = await prismaDb.level.findMany({
			select: {
				id: true,
				name: true,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: jobTypes,
				message: "Levels fetched successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error fetching Levels", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching Levels",
			},
			{ status: 400 }
		);
	}
};
