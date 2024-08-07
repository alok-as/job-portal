import { CheckboxGroup } from "@/components/ui/checkbox-group";
import { getJobTypesWithJobCount } from "@/services/server/job-types";

export const JobTypeFilters = async () => {
	const jobTypes = await getJobTypesWithJobCount();
	return <CheckboxGroup title="Type" options={jobTypes} />;
};
