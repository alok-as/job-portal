import { useState } from "react";
import { useRouter } from "next-nprogress-bar";
import { useSearchParams } from "next/navigation";

import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { CompanyLoginFields, loginCompanySchema } from "@/schema/company";

export const useCompanySignIn = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
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
			const callbackUrl =
				searchParams.get("callbackUrl") ?? "/company/dashboard";

			await signIn("credentials", {
				email: fields.email,
				password: fields.password,
				userType: "company",
				callbackUrl,
			});

			toast.success("Company login successfully");
			router.push(callbackUrl);
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
