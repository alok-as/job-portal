import { type AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { getCompany } from "@/services/server/company";
import { getCandidate } from "@/services/server/candidate";

import { compareHash } from "@/utils/hashing";
import { env } from "@/env/env";

import prismaDb from "./prisma";

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
					const company = await getCompany(credentials.email);
					if (!company) return null;

					const isPasswordCorrect = await compareHash(
						credentials.password,
						company.password
					);
					if (!isPasswordCorrect) return null;

					return { ...company, role: "company" };
				}

				const candidate = await getCandidate(credentials.email);
				if (!candidate) return null;

				const isPasswordCorrect = await compareHash(
					credentials.password,
					candidate.password
				);
				if (!isPasswordCorrect) return null;

				return { ...candidate, role: "candidate" };
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
	callbacks: {
		async signIn({ account, profile }) {
			if (account?.provider === "google" && profile) {
				if (profile.email && profile.name) {
					const { email, name } = profile;
					const candidate = await getCandidate(email);

					if (!candidate) {
						await prismaDb.candidate.create({
							data: {
								name: name,
								email: email,
								password: "",
							},
						});
					}
				}
			}

			return true;
		},
		async jwt({ user, account, token }) {
			if (account?.provider === "google") {
				token.role = "candidate";
			} else if (user) {
				token.role = user.role;
			}

			if (user) {
				token.id = user.id;
			}

			return token;
		},
		async session({ session, token }) {
			return {
				...session,
				user: {
					...session.user,
					id: token.id,
					role: token.role,
				},
			};
		},
	},
};
