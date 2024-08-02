"use client";
import { InputField } from "@/components/ui/input-field";
import { Button } from "@/components/ui/button";

import useCompanySignIn from "./use-company-sign-in";
import Link from "next/link";

export const CompanySignIn = () => {
	const { isLoading, handleSubmit, onSubmit, register, errors } =
		useCompanySignIn();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-4">
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

				<Link
					href="/company/forgot-password"
					className="text-js-grey-600 text-sm text-right"
				>
					Forgot Password?
				</Link>

				<Button disabled={isLoading}>Login</Button>

				<small className="flex justify-center items-center gap-1">
					<span>Don&apos;t have an Account?</span>
					<Link href="/company/sign-up" className="text-js-primary-300">
						Sign Up
					</Link>
				</small>
			</div>
		</form>
	);
};
