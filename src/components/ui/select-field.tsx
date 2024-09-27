import Select from "react-select";
import { Controller } from "react-hook-form";

export type SelectFieldProps = {
	label: string;
	errorMessage?: string;
	name: "industryId" | "typeId" | "remoteId" | "skillIds" | "levelId";
	options: { label: string; value: string }[];
	multiple?: boolean;
	control: any;
};

export const SelectField = ({
	label,
	errorMessage,
	name,
	options,
	multiple = false,
	control,
}: SelectFieldProps) => {
	return (
		<div className="flex flex-col gap-2">
			{label && <label className="text-sm text-js-primary-800">{label}</label>}
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value, ref } }) => (
					<Select
						ref={ref}
						options={options}
						placeholder=""
						isMulti={multiple}
						value={value}
						onChange={onChange}
					/>
				)}
			/>
			{errorMessage && (
				<small className="a text-xs text-red-400">{errorMessage}</small>
			)}
		</div>
	);
};

SelectField.displayName = "SelectField";
