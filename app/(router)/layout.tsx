"use client";
import { useEffect } from "react";
import SideNav from "./_components/SideNav";

import Header from "./_components/Header";
import setColors from "@/lib/setColors";

interface IProps {
	children: React.ReactNode;
}
const sideNavWidth = 64;
const layout = ({ children }: IProps) => {
	// set colors
	setColors();
	return (
		<>
			<div className={`sm:block fixed sm:w-64 `}>
				<SideNav />
			</div>
			<div
				className={`header sm:ml-64 transition-all ease-in-out duration-200 close`}>
				<Header />
				{children}
			</div>
		</>
	);
};

export default layout;
