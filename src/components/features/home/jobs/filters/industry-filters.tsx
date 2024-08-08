import { CheckboxGroup } from "@/components/ui/checkbox-group";
import { getIndustriesWithJobCount } from "@/services/server/industries";

export const IndustryFilters = async () => {
	const industries = await getIndustriesWithJobCount();

	return (
		<CheckboxGroup name="industry" title="Industry" options={industries} />
	);
};
