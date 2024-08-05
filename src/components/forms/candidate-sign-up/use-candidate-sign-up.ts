"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { CandidateFields, createCandidateSchema } from "@/schema/candidate";
import { createCandidate } from "@/services/client/candidate";

export const useCandidateSignUp = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CandidateFields>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		resolver: zodResolver(createCandidateSchema),
	});

	const onSubmit: SubmitHandler<CandidateFields> = async (fields) => {
		try {
			setIsLoading(true);

			const response = await createCandidate(fields);
			const data = await response.json();

			if (!response?.ok) {
				throw new Error(data.message);
			}

			toast.success(data.message);
			router.push("/candidate/sign-in");
			router.refresh();
		} catch (error) {
			if (error instanceof Error) {
				console.log(error);
				toast.error(error.message);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, handleSubmit, onSubmit, register, errors };
};
