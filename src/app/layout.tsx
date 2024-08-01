import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/layout/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "JobScout: Premier Job Portal for Hiring and Careers",
	description:
		"Job search made easy with our premier job portal. Find the latest job openings, connect with employers, and kickstart your career. Simplify your job search and find the right opportunity with us today!",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
		<body className={inter.className}>
			<Header />
			{/* <main>{children}</main> */}
			{/* <footer>Footer</footer> */}
		</body>
	</html>
);

export default RootLayout;
