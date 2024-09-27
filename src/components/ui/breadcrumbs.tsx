import { type ReactNode } from "react";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

export type BreadcrumbsProps = {
	list: { title: string; href: string; icon?: ReactNode }[];
};

export const Breadcrumbs = ({ list }: BreadcrumbsProps) => {
	return (
		<div className="bg-white py-2 px-4 rounded-md flex items-center gap-1">
			{list.map(({ title, href, icon }, index) => (
				<>
					<Link
						className="flex items-center gap-1 text-sm text-js-grey-500 transition group hover:text-black"
						key={title}
						href={href}
					>
						{icon}
						<span>{title}</span>
					</Link>
					{index !== list.length - 1 && (
						<ChevronRight size={14} color="#66789c" />
					)}
				</>
			))}
		</div>
	);
};
