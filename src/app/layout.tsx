import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ToastProvider } from "@/providers/toast-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { Header } from "@/components/layout/header";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "JobScout: Premier Job Portal for Hiring and Careers",
	description:
		"Job search made easy with our premier job portal. Find the latest job openings, connect with employers, and kickstart your career. Simplify your job search and find the right opportunity with us today!",
};

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const session = await getServerSession(authOptions);

	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider session={session}>
					<Header />
					<main>{children}</main>
				</AuthProvider>
				<ToastProvider />
			</body>
		</html>
	);
};

export default RootLayout;
