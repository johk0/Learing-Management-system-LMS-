import React, { useEffect } from "react";
import { RootState } from "@/app/_store/store";
import { useSelector } from "react-redux";

const SetColors = () => {
	const data = useSelector((state: RootState) => state.generalData[0]);

	function setPrimaryColor(hue: number, saturation: string, lightness: string) {
		document.documentElement.style.setProperty(
			"--primary",
			`${hue}, ${saturation}, ${lightness}`
		);
	}
	useEffect(() => {
		// Set primary color to black
		setPrimaryColor(0, "0%", "0%");

		if (data) {
			const { color } = data;
			const { hue, saturation, lightness } = color;

			setPrimaryColor(hue, saturation, lightness);
		}
	}, [data]);

	return <></>; // Add an empty JSX element as the return value
};

export default SetColors;
