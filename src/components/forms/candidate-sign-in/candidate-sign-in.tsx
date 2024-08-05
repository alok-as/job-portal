"use client";
import { InputField } from "@/components/ui/input-field";
import { Button } from "@/components/ui/button";

import { useCandidateSignIn } from "@/components/forms/candidate-sign-in/use-candidate-sign-in";
import Link from "next/link";

export const CandidateSignIn = () => {
	const { isLoading, handleSubmit, onSubmit, register, errors } =
		useCandidateSignIn();

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
					href="/candidate/forgot-password"
					className="text-js-grey-600 text-sm text-right"
				>
					Forgot Password?
				</Link>

				<Button disabled={isLoading}>Login</Button>

				<small className="flex justify-center items-center gap-1">
					<span>Don&apos;t have an Account?</span>
					<Link href="/candidate/sign-up" className="text-js-primary-300">
						Sign Up
					</Link>
				</small>
			</div>
		</form>
	);
};
