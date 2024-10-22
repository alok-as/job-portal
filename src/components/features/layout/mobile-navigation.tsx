"use client";
import { X, Menu } from "lucide-react";
import { ReactNode, useState } from "react";

export type MobileNavigationProps = {
	children: ReactNode;
};

export const MobileNavigation = ({ children }: MobileNavigationProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = () => setIsOpen(true);
	const onClose = () => setIsOpen(false);

	return (
		<div className="md:hidden">
			<Menu size={24} onClick={onOpen} />
			{isOpen && (
				<>
					<div
						className="fixed inset-0 z-[100] w-screen h-screen bg-[rgba(0,0,0,0.6)]"
						onClick={onClose}
					></div>
					<aside className="fixed top-0 right-0 z-[100] w-4/5 h-screen bg-white px-8 py-16">
						<X
							className="absolute right-8 top-6 cursor-pointer"
							onClick={onClose}
						/>
						{children}
					</aside>
				</>
			)}
		</div>
	);
};
