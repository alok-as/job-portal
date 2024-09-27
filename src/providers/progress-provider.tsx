"use client";
import { useEffect, useState } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<ProgressBar height="2px" options={{ showSpinner: true }} shallowRouting />
	);
};

export default ProgressProvider;
