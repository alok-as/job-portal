import Image from "next/image";
import { SearchBox } from "@/components/features/home/search-box";

import { getJobsCount } from "@/services/server/job";
import { getAllIndustries } from "@/services/server/industries";

export const Hero = async () => {
	const [totalJobs, industries] = await Promise.all([
		getJobsCount(),
		getAllIndustries(),
	]);

	return (
		<section id="hero">
			<div className="container relative p-10 bg-js-grey-300 rounded-2xl">
				<div className="relative max-w-3xl mx-auto z-50 flex flex-col justify-center items-center text-center">
					<h3 className="flex items-center gap-1 mb-3 text-3xl font-semibold">
						<span
							className="text-js-primary-400 relative 
            after:content after:content-[''] after:absolute after:h-6 after:left-0 after:-bottom-[6px] after:w-full  after:bg-js-primary-400 after:opacity-10"
						>
							{totalJobs} Jobs
						</span>
						<span>Available Now</span>
					</h3>
					<p className="text-sm mb-10 text-js-grey-500 font-medium w-4/5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
						repellendus magni, atque delectus molestias quis?
					</p>
					<SearchBox className="mb-20" industries={industries} />
				</div>
				<Image
					src="/left-job.svg"
					alt="Job"
					width={232}
					height={201}
					className="absolute bottom-0 left-0 z-10"
				/>
				<Image
					src="/right-job.svg"
					alt="Job"
					width={213}
					height={117}
					className="absolute bottom-0 right-0 z-10"
				/>
			</div>
		</section>
	);
};
