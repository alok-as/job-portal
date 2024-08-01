"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { CompanyFields, createCompanySchema } from "@/schema/company";
import { createCompany } from "@/services/client/company";

const useCompanySignUp = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CompanyFields>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		resolver: zodResolver(createCompanySchema),
	});

	const onSubmit: SubmitHandler<CompanyFields> = async (fields) => {
		try {
			setIsLoading(true);

			const response = await createCompany(fields);
			const data = await response.json();

			if (!response?.ok) {
				throw new Error(data.message);
			}

			toast.success(data.message);
			router.push("/company/sign-in");
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

export default useCompanySignUp;
