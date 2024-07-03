"use client";

import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import { useEffect } from "react";
import setColors from "@/lib/setColors";

export default function Home() {
	setColors();
	return (
		<>
			<div>
				<Button>Default</Button>
				<Link
					href="/courses"
					className={buttonVariants({ variant: "outline" })}>
					courses
				</Link>
			</div>
		</>
	);
}
