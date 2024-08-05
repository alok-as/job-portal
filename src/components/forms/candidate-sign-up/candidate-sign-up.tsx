"use client";
import Link from "next/link";

import { InputField } from "@/components/ui/input-field";
import { Button } from "@/components/ui/button";

import { useCandidateSignUp } from "@/components/forms/candidate-sign-up/use-candidate-sign-up";

export const CandidateSignUp = () => {
	const { isLoading, handleSubmit, onSubmit, register, errors } =
		useCandidateSignUp();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-4">
				<InputField
					type="text"
					{...register("name")}
					label="Full Name"
					placeholder="Steve Jobs"
					errorMessage={errors.name?.message}
				/>

				<InputField
					type="text"
					{...register("email")}
					label="Email"
					placeholder="steve.jobs@gmail.com"
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
					<Link href="/candidate/sign-in" className="text-js-primary-300">
						Sign In
					</Link>
				</small>
			</div>
		</form>
	);
};
