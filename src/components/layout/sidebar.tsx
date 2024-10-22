import { getServerSession } from "next-auth";

import { HeaderLink } from "@/components/ui/header-link";
import { LogoutButton } from "@/components//ui/logout-button";

import { authOptions } from "@/lib/auth";
import { companyLinks, standardLinks } from "@/utils/links";

export const Sidebar = async () => {
	const session = await getServerSession(authOptions);

	return (
		<nav>
			<ul className="flex flex-col gap-6">
				{session ? (
					<>
						{session.user?.role === "company" ? (
							<>
								{companyLinks.map((link) => (
									<HeaderLink
										key={link.title}
										href={link.href}
										type={link.type}
									>
										{link.title}
									</HeaderLink>
								))}
							</>
						) : null}
						<LogoutButton />
					</>
				) : (
					standardLinks.map((link) => (
						<HeaderLink key={link.title} href={link.href} type={link.type}>
							{link.title}
						</HeaderLink>
					))
				)}
			</ul>
		</nav>
	);
};
