import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link href="/">
			<Image alt="ScoutJob" src="/scout-job.svg" width={200} height={40} />
		</Link>
	);
};
