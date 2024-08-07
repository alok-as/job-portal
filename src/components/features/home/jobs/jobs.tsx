import { Listing } from "@/components/features/home/jobs/listing/listing";

export const Jobs = () => {
	return (
		<section id="jobs" className="mt-8">
			<div className="container flex gap-8">
				<div className="basis-3/12 bg-green-400">Filters</div>
				<div className="flex-1">
					<Listing />
				</div>
			</div>
		</section>
	);
};
