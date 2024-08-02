"use client";
import Image from "next/image";
import { ComponentProps } from "react";

export type CompanySignInButtonProps = ComponentProps<"button">;

export const CompanySignInButton = ({}: CompanySignInButtonProps) => {
	return (
		<button
			type="button"
			className="flex items-center justify-center gap-2 py-3 px-6 border border-js-grey-200 text-sm font-semibold hover:text-js-primary-300 hover:-translate-y-1 transition duration-200 ease-[cubic-bezier(0.02,0.01,0.47,1)] hover:shadow-[0_10px_20px_-5px_rgba(10,42,105,0.06)]"
		>
			<Image src="/google.svg" alt="Google" width={20} height={20} />
			<span>Sign In with Google</span>
		</button>
	);
};
