import Image from "next/image";
import Link from "next/link";

import { SkillBox } from "@/components/ui/skill";
import { Button } from "@/components/ui/button";

import { MapPin, BriefcaseBusiness, Clock9 } from "lucide-react";

import { formatTimeFromNow } from "@/utils/date";
import type { JobWithDetails } from "@/types/types";

export type JobCardProps = JobWithDetails;

export const JobCard = ({
	id,
	title,
	company,
	remote,
	description,
	skills,
	createdAt,
}: JobCardProps) => {
	return (
		<Link href={`/jobs/${id}`}>
			<article className="relative rounded-lg bg-js-grey-700 border border-[#e0e6f7] px-5 py-7 hover:bg-white hover:-translate-y-2 transition duration-200 ease-[cubic-bezier(.02,.01,.47,1)]">
				<span className="absolute top-3 right-5">
					<Image src="/flash.svg" alt="featured" width={24} height={24} />
				</span>

				<div className="flex items-center gap-3">
					<Image
						src="/company-1.png"
						alt={company.name}
						width={52}
						height={52}
					/>
					<div className="flex flex-col gap-1">
						<h3 className="text-js-primary-800 text-lg font-semibold">
							{company.name}
						</h3>
						<span className="flex items-center gap-1 text-xs">
							<MapPin size={13} color="#a0abb8" />
							<span className="text-[#a0abb8]">{company.location}</span>
						</span>
					</div>
				</div>

				<div>
					<h4 className="text-base font-semibold text-js-primary-800 mt-5 mb-1">
						{title}
					</h4>
					<span className="text-[#a0abb8] text-xs flex items-center gap-2">
						<span className="flex items-center gap-1">
							<BriefcaseBusiness size={12} />
							{remote.name}
						</span>
						<span className="flex items-center gap-1">
							<Clock9 size={12} />
							{createdAt ? formatTimeFromNow(createdAt) : "4 minutes ago"}
						</span>
					</span>

					<p className="mt-4 text-js-grey-100 text-sm font-medium">
						{description}
					</p>

					<div className="flex items-center gap-2 flex-wrap mt-7">
						{skills.map((skill) => (
							<SkillBox key={skill.id} name={skill.name} />
						))}
					</div>

					<div className="flex justify-end mt-8">
						<Button variant="secondary" size="sm">
							Apply Now
						</Button>
					</div>
				</div>
			</article>
		</Link>
	);
};
