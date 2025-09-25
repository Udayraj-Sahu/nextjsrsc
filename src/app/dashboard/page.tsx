"use client";
import { useState } from "react";

export default function DashboardPage() {
	const [name, setName] = useState("");
	console.log("Dashboard Client Components");

	return (
		<div>
			<h1>Dashboard</h1>
			<input
				type="text"
				value={name}
				id="name"
				onChange={(e) => setName(e.target.value)}
			/>
			<p>Heloo, {name} </p>
		</div>
	);
}
