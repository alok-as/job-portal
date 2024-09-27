import { getServerSession } from "next-auth";

import { Logo } from "@/components/ui/logo";
import { HeaderLink } from "@/components/ui/header-link";
import { LogoutButton } from "@/components//ui/logout-button";

import { authOptions } from "@/lib/auth";

const links = [
	{
		title: "Hire on JobScout",
		href: "/company/sign-up",
		type: "secondary" as const,
	},
	{
		title: "Sign Up",
		href: "/candidate/sign-up",
		type: "secondary" as const,
	},
	{
		title: "Login",
		href: "/candidate/sign-in",
		type: "primary" as const,
	},
];

const companyLinks = [
	{
		title: "Profile",
		href: "/company/profile",
		type: "secondary" as const,
	},
	{
		title: "Post a Job",
		href: "/company/post-job",
		type: "secondary" as const,
	},
];

export const Header = async () => {
	const session = await getServerSession(authOptions);

	return (
		<header id="header">
			<div className="container flex items-center justify-between py-6">
				<Logo />
				<nav>
					<ul className="flex items-center gap-6">
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
							links.map((link) => (
								<HeaderLink key={link.title} href={link.href} type={link.type}>
									{link.title}
								</HeaderLink>
							))
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};
