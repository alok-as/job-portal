"use client";

import type { FormEvent } from "react";
import { signIn } from "next-auth/react";

export const SignUpForm = () => {
	const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const fields = Object.fromEntries(formData.entries());

		await signIn("credentials", {
			email: fields.email,
			password: fields.password,
			userType: "company",
		});
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<fieldset>
				<legend className="mb-4">Company Registration</legend>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<label htmlFor="email">Email</label>
						<input id="email" name="email" type="email" className="border px-4 py-2" />
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="password">Password</label>
						<input id="password" name="password" type="password" className="border px-4 py-2" />
					</div>
					<button className="px-4 py-2 bg-orange-500 text-white">
						Sign Up
					</button>
				</div>
			</fieldset>
		</form>
	);
};
