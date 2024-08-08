import { Hero } from "@/components/features/home/hero/hero";
import { Jobs } from "@/components/features/home/jobs/jobs";

import { generateSearchParams } from "@/utils/query";

const HomePage = ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] };
}) => {
	const params = generateSearchParams(searchParams);

	return (
		<>
			<Hero />
			<Jobs params={params} />
		</>
	);
};

export default HomePage;
