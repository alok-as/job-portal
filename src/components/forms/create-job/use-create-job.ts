"use client";
import { useState } from "react";
import { useRouter } from "next-nprogress-bar";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { JobClientFields, createJobClientSchema } from "@/schema/job";
import { createJob } from "@/services/client/jobs";
import { clearCacheByTag } from "@/utils/actions";

export type TSelectOption = { label: string; value: string };

export type TUseCreateJob = {
	defaultIndustry: TSelectOption;
	defaultLevel: TSelectOption;
	defaultRemote: TSelectOption;
	defaultType: TSelectOption;
};

export const useCreateJob = ({
	defaultIndustry,
	defaultLevel,
	defaultRemote,
	defaultType,
}: TUseCreateJob) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<JobClientFields>({
		defaultValues: {
			title: "",
			description: "",
			industryId: defaultIndustry,
			typeId: defaultType,
			remoteId: defaultRemote,
			levelId: defaultLevel,
			skillIds: [],
		},
		resolver: zodResolver(createJobClientSchema),
	});

	const onSubmit: SubmitHandler<JobClientFields> = async (fields) => {
		try {
			setIsLoading(true);
			const payload = {
				title: fields.title,
				description: fields.description,
				industryId: fields.industryId.value,
				typeId: fields.typeId.value,
				remoteId: fields.remoteId.value,
				levelId: fields.levelId.value,
				skillIds: fields.skillIds.map((skill) => skill.value),
			};

			const response = await createJob(payload);
			const data = await response.json();

			if (!response?.ok) {
				throw new Error(data.message);
			}

			toast.success(data.message);
			router.push("/company/jobs");

			clearCacheByTag("jobs");
			router.refresh();
		} catch (error) {
			if (error instanceof Error) {
				console.log(error);
				toast.error(error.message);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, handleSubmit, onSubmit, register, errors, control };
};
