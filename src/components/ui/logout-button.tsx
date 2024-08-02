"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const LogoutButton = () => {
	const onLogout = () => signOut();

	return (
		<Button onClick={onLogout} variant="primary">
			Logout
		</Button>
	);
};
