import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const HomePage = async () => {
	const session = await getServerSession(authOptions);

	return (
		<main className="min-h-screen">
			<p>{session?.user?.name}</p>
			<p>{session?.user?.email}</p>
		</main>
	);
};

export default HomePage;
