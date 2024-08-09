import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

import prismaDb from "@/lib/prisma";
import { createRemoteSchema } from "@/schema/remote";
import { getAllRemotes } from "@/services/server/remote";

export const POST = async (req: Request) => {
	try {
		const reqData = await req.json();
		const { name } = createRemoteSchema.parse(reqData);

		await prismaDb.remote.create({
			data: {
				name,
			},
		});

		return NextResponse.json(
			{
				success: true,
				data: null,
				message: "Remote created successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error creating a Remote", error);

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
				message: "Error creating Remote",
			},
			{ status: 400 }
		);
	}
};

export const GET = async (req: Request) => {
	try {
		const jobTypes = await getAllRemotes();

		return NextResponse.json(
			{
				success: true,
				data: jobTypes,
				message: "Remotes fetched successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log("Error fetching Remotes", error);

		return NextResponse.json(
			{
				success: false,
				data: null,
				message: "Error fetching Remotes",
			},
			{ status: 400 }
		);
	}
};
