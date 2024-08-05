"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { CandidateLoginFields, loginCandidateSchema } from "@/schema/candidate";

export const useCandidateSignIn = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CandidateLoginFields>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(loginCandidateSchema),
	});

	const onSubmit: SubmitHandler<CandidateLoginFields> = async (fields) => {
		try {
			setIsLoading(true);

			await signIn("credentials", {
				email: fields.email,
				password: fields.password,
				userType: "candidate",
			});

			toast.success("Candidate login successfully");
			router.push("/");
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
