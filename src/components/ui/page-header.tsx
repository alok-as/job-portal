import Image from "next/image";
import { Breadcrumbs, type BreadcrumbsProps } from "./breadcrumbs";

export type PageHeaderProps = {
	id: string;
	title: string;
	subtitle?: string;
	breadcrumbs?: BreadcrumbsProps["list"];
};

export const PageHeader = ({
	id,
	title,
	subtitle,
	breadcrumbs,
}: PageHeaderProps) => (
	<section id={id} className="relative">
		<Image
			className="absolute inset-0 -z-10"
			src="/page-header.png"
			alt={title}
			width={1920}
			height={229}
		/>
		<div className="container py-12 flex justify-between items-end">
			<div>
				<h2 className="mb-3 font-semibold text-js-primary-800 text-4xl">
					{title}
				</h2>
				{subtitle && <p className="text-js-grey-500 text-lg">{subtitle}</p>}
			</div>
			{breadcrumbs && breadcrumbs.length !== 0 && (
				<Breadcrumbs list={breadcrumbs} />
			)}
		</div>
	</section>
);
