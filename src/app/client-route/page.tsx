"use client";
import React from "react";
import { useTheme } from "@/components/Theme-provider";
import { clientSideFunction } from "@/utils/client-utils";
export default function ClientRoutePage() {
	const theme = useTheme();
	const result = clientSideFunction();
	return (
		<>
		<h1 style={{ color: theme.colors.secondary }}>Client router Page</h1>
		<p>{result}</p>
		</>
	);
}
