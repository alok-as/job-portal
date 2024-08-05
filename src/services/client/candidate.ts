import { type CandidateFields } from "@/schema/candidate";

export const createCandidate = (fields: CandidateFields) =>
	fetch("/api/candidate", {
		method: "POST",
		body: JSON.stringify(fields),
	});
