"use client";
import { RootState } from "@/app/_store/store";
import { log } from "console";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import WellcomeBanner from "./_components/WellcomeBanner";
import CourseList from "./_components/CourseList";

interface IProps {}
const Courses = ({}: IProps) => {
	const data = useSelector((state: RootState) => state.generalData[0]);

	const logo = data.logo;

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-3 p-5">
				{/* left container */}
				<div className="col-span-2">
					{/* banner */}
					<WellcomeBanner />

					{/* Course List  */}
					<CourseList />
				</div>
				{/* right container */}
				<div>right</div>
			</div>
		</>
	);
};

export default Courses;
