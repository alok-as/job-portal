import { CheckboxGroup } from "@/components/ui/checkbox-group";
import { getLevelsWithJobCount } from "@/services/server/level";

export const LevelFilters = async () => {
	const levels = await getLevelsWithJobCount();
	return <CheckboxGroup title="Experience Level" options={levels} />;
};
