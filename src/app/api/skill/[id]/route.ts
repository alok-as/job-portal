import { NextResponse } from "next/server";

import prismaDb from "@/lib/prisma";
import { updateSkillSchema } from "@/schema/skill";

export const PATCH = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		const reqData = await req.json();
		const { name } = updateSkillSchema.parse(reqData);

		await prismaDb.skill.update({
			where: { id: params.id },
			data: {
				name,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Skill updated successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error updating Skill", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error updating Skill",
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
		await prismaDb.skill.delete({
			where: { id: params.id },
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Skill deleted successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error deleting Skill", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error deleting Skill",
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
		const skill = await prismaDb.skill.findUnique({
			where: { id: params.id },
			select: {
				id: true,
				name: true,
			},
		});

		if (!skill) {
			return NextResponse.json(
				{
					success: false,
					data: skill,
					message: "Skill not found",
				},
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{
				success: true,
				data: skill,
				message: "Skill fetched successfully",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error fetching Skill", error);
		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching Skill",
			},
			{
				status: 400,
			}
		);
	}
};
