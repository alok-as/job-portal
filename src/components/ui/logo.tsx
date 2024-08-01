import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link href="/">
			<Image alt="JobScout" src="/logo.svg" width={139} height={36} />
		</Link>
	);
};
