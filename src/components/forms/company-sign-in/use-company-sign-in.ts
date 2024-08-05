"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { CompanyLoginFields, loginCompanySchema } from "@/schema/company";
import { signIn } from "next-auth/react";

export const useCompanySignIn = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CompanyLoginFields>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(loginCompanySchema),
	});

	const onSubmit: SubmitHandler<CompanyLoginFields> = async (fields) => {
		try {
			setIsLoading(true);

			await signIn("credentials", {
				email: fields.email,
				password: fields.password,
				userType: "company",
			});

			toast.success("Company login successfully");
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
