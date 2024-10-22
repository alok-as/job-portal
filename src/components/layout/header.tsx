import { Logo } from "@/components/ui/logo";
import { Navigation } from "@/components/features/layout/navigation";
import { MobileNavigation } from "../features/layout/mobile-navigation";
import { Sidebar } from "@/components/layout/sidebar";

export const Header = async () => {
	return (
		<header id="header">
			<div className="container flex items-center justify-between py-6">
				<Logo />
				<Navigation />
				<MobileNavigation>
					<Sidebar />
				</MobileNavigation>
			</div>
		</header>
	);
};
