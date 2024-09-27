"use client";
import { InputField } from "@/components/ui/input-field";
import { Button } from "@/components/ui/button";

import { useCreateJob } from "@/components/forms/create-job/use-create-job";
import { SelectField } from "@/components/ui/select-field";
import type { Industry, Level, JobType, Remote, Skill } from "@prisma/client";

export type CreateJobProps = {
	industries: Industry[];
	jobTypes: JobType[];
	remotes: Remote[];
	levels: Level[];
	skills: Skill[];
};

export const CreateJob = ({
	industries,
	jobTypes,
	levels,
	remotes,
	skills,
}: CreateJobProps) => {
	const { isLoading, handleSubmit, onSubmit, register, errors, control } =
		useCreateJob({
			defaultIndustry: { label: industries[0].name, value: industries[0].id },
			defaultLevel: { label: levels[0].name, value: levels[0].id },
			defaultRemote: { label: remotes[0].name, value: remotes[0].id },
			defaultType: { label: jobTypes[0].name, value: jobTypes[0].id },
		});

	const industryOptions = industries.map((industry) => ({
		label: industry.name,
		value: industry.id,
	}));

	const levelOptions = levels.map((level) => ({
		label: level.name,
		value: level.id,
	}));

	const remoteOptions = remotes.map((remote) => ({
		label: remote.name,
		value: remote.id,
	}));

	const typeOptions = jobTypes.map((type) => ({
		label: type.name,
		value: type.id,
	}));

	const skillOptions = skills.map((skill) => ({
		label: skill.name,
		value: skill.id,
	}));

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-4">
				<InputField
					type="text"
					{...register("title")}
					label="Job Title"
					placeholder="Software Developer"
					errorMessage={errors.title?.message}
				/>

				<InputField
					type="text"
					{...register("description")}
					label="Job Description"
					placeholder="Looking for a senior software developer..."
					errorMessage={errors.description?.message}
				/>

				<SelectField
					control={control}
					name="industryId"
					label="Select Industry"
					errorMessage={errors.industryId?.message}
					options={industryOptions}
				/>

				<SelectField
					name="levelId"
					control={control}
					label="Select Level"
					errorMessage={errors.levelId?.message}
					options={levelOptions}
				/>

				<SelectField
					name="remoteId"
					control={control}
					label="Select Remote"
					errorMessage={errors.remoteId?.message}
					options={remoteOptions}
				/>

				<SelectField
					name="typeId"
					control={control}
					label="Select Job Type"
					errorMessage={errors.typeId?.message}
					options={typeOptions}
				/>

				<SelectField
					name="skillIds"
					control={control}
					label="Select Skills"
					errorMessage={errors.skillIds?.message}
					options={skillOptions}
					multiple
				/>

				<Button className="self-end" disabled={isLoading}>
					Submit & Create
				</Button>
			</div>
		</form>
	);
};
