import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

import prismaDb from "@/lib/prisma";
import { createSkillSchema } from "@/schema/skill";

export const POST = async (req: Request) => {
	try {
		const reqData = await req.json();
		const { name } = createSkillSchema.parse(reqData);

		await prismaDb.skill.create({
			data: {
				name,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Skill created successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error creating a Skill", error);

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
				message: "Error creating Skill",
			},
			{ status: 400 }
		);
	}
};

export const GET = async (req: Request) => {
	try {
		const industries = await prismaDb.skill.findMany({
			select: {
				id: true,
				name: true,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: industries,
				message: "Skills fetched successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error fetching Skills", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching Skills",
			},
			{ status: 400 }
		);
	}
};
