"use client";
import { type ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({
	children,
	session,
}: {
	children: ReactNode;
	session: any;
}) => <SessionProvider session={session}>{children}</SessionProvider>;
