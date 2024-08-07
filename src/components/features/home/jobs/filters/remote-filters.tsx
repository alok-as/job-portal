import { CheckboxGroup } from "@/components/ui/checkbox-group";
import { getRemotesWithJobCount } from "@/services/server/remote";

export const RemoteFilters = async () => {
	const remotes = await getRemotesWithJobCount();
	return <CheckboxGroup title="Remote/On-site" options={remotes} />;
};
