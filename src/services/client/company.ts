import { type CompanyFields } from "@/schema/company";

export const createCompany = (fields: CompanyFields) =>
	fetch("/api/company", {
		method: "POST",
		body: JSON.stringify(fields),
	});
