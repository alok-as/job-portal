import { Logo } from "@/components/ui/logo";
import { HeaderLink } from "@/components/ui/header-link";

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

export const Header = () => (
	<header id="header">
		<div className="container flex items-center justify-between py-6">
			<Logo />
			<nav>
				<ul className="flex items-center gap-6">
					{links.map((link) => (
						<HeaderLink key={link.title} href={link.href} type={link.type}>
							{link.title}
						</HeaderLink>
					))}
				</ul>
			</nav>
		</div>
	</header>
);