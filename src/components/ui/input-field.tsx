import { cn } from "@/utils/tailwind";
import { ComponentProps, forwardRef } from "react";

export type InputFieldProps = ComponentProps<"input"> & {
	label?: string;
	errorMessage?: string;
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
	({ label, errorMessage, ...rest }, ref) => (
		<div className="flex flex-col gap-2">
			{label && <label className="text-sm text-js-primary-800">{label}</label>}
			<input
				ref={ref}
				{...rest}
				className={cn(
					"py-3 px-6 border border-js-grey-200 text-sm focus:border-js-grey-400 outline-none"
				)}
			/>
			{errorMessage && (
				<small className="a text-xs text-red-400">{errorMessage}</small>
			)}
		</div>
	)
);

InputField.displayName = "InputField";
