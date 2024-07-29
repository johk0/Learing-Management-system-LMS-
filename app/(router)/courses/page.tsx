"use client";
import { RootState } from "@/app/_store/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import WellcomeBanner from "./_components/WellcomeBanner";
import CourseList from "./_components/CourseList";
import SideBanners from "./_components/SideBanners";

interface IProps {}
const Courses = ({}: IProps) => {
	const data = useSelector((state: RootState) => state.generalData[0]);

	const logo = data.logo;

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5 ">
				{/* left container */}
				<div className="col-span-3">
					{/* banner */}
					<WellcomeBanner />

					{/* Course List  */}
					<CourseList />
				</div>
				{/* right container */}
				<div className="  snap-center items-center col-span-3 md:col-span-1">
					<SideBanners />
				</div>
			</div>
		</>
	);
};

export default Courses;
