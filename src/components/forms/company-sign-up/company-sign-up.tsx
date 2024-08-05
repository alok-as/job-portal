"use client";
import Link from "next/link";

import { InputField } from "@/components/ui/input-field";
import { Button } from "@/components/ui/button";

import { useCompanySignUp } from "@/components/forms/company-sign-up/use-company-sign-up";

export const CompanySignUp = () => {
	const { isLoading, handleSubmit, onSubmit, register, errors } =
		useCompanySignUp();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-4">
				<InputField
					type="text"
					{...register("name")}
					label="Company Name"
					placeholder="Amazon"
					errorMessage={errors.name?.message}
				/>

				<InputField
					type="text"
					{...register("email")}
					label="Email"
					placeholder="steven.job@gmail.com"
					errorMessage={errors.email?.message}
				/>

				<InputField
					type="password"
					{...register("password")}
					label="Password"
					placeholder="********"
					errorMessage={errors.password?.message}
				/>

				<Button disabled={isLoading}>Submit & Register</Button>

				<small className="flex justify-center items-center gap-1">
					<span>Already have an Account?</span>
					<Link href="/company/sign-in" className="text-js-primary-400">
						Sign In
					</Link>
				</small>
			</div>
		</form>
	);
};
