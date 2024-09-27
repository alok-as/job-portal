import { CreateJob } from "@/components/forms/create-job/create-job";

import { getAllIndustries } from "@/services/server/industries";
import { getAllJobTypes } from "@/services/server/job-types";
import { getAllLevels } from "@/services/server/level";
import { getAllRemotes } from "@/services/server/remote";
import { getAllSkills } from "@/services/server/skill";

export const PostJob = async () => {
	const [industries, levels, jobTypes, remotes, skills] = await Promise.all([
		getAllIndustries(),
		getAllLevels(),
		getAllJobTypes(),
		getAllRemotes(),
		getAllSkills(),
	]);

	return (
		<section id="post-job" className="my-10">
			<div className="container">
				<CreateJob
					industries={industries}
					levels={levels}
					remotes={remotes}
					jobTypes={jobTypes}
					skills={skills}
				/>
			</div>
		</section>
	);
};
