import { House } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";

const breadcrumbs = [
	{
		title: "Home",
		href: "/",
		icon: (
			<House size={14} className="group-hover:stroke-black" color="#66789c" />
		),
	},
	{
		title: "Post a Job",
		href: "/company/post-job",
	},
];

export const PostJobHeader = () => (
	<PageHeader
		id="post-a-job"
		title="Post a Job"
		subtitle="Hire Talent, and Manage Applications"
		breadcrumbs={breadcrumbs}
	/>
);
