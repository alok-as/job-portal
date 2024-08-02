import { type AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { getCompany } from "@/services/server/company";
import { getCandidate } from "@/services/server/candidate";
import { env } from "@/env/env";

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
				},
				password: { label: "Password", type: "password" },
				userType: { label: "User Type", type: "text" },
			},
			async authorize(credentials) {
				if (!credentials) return null;

				if (credentials.userType === "company") {
					const company = await getCompany(
						credentials.email,
						credentials.password
					);

					if (!company) return null;
					return company;
				}

				const candidate = await getCandidate(
					credentials.email,
					credentials.password
				);

				if (!candidate) return null;
				return candidate;
			},
		}),
		GoogleProvider({
			clientId: env.GOOGLE_ID,
			clientSecret: env.GOOGLE_SECRET,
		}),
	],
	pages: {
		signIn: "/",
	},
	session: { strategy: "jwt" },
};
