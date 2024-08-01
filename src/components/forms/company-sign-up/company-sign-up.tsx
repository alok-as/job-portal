"use client";
import { InputField } from "@/components/ui/input-field";
import { Button } from "@/components/ui/button";

import useCompanySignUp from "./use-company-sign-up";

export const CompanySignUp = () => {
	const { isLoading, handleSubmit, onSubmit, register, errors } =
		useCompanySignUp();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-4">
				<InputField
					type="text"
					{...register("name")}
					label="Full Name"
					placeholder="Steven Job"
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
			</div>
		</form>
	);
};
