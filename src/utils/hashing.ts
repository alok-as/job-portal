import bcrypt from "bcryptjs";

export const generateHash = (password: string) => bcrypt.hash(password, 10);

export const compareHash = (password: string, originalPassword: string) =>
	bcrypt.compare(password, originalPassword);
