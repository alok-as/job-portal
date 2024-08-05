import { DefaultUser } from "next-auth";

declare module "next-auth" {
	interface Session {
		user?: DefaultUser & {
			role: "company" | "candidate";
		};
	}

	interface User extends DefaultUser {
		role: string;
	}
}
