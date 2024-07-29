"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";
import CourseEnrollSection from "./_components/CourseEnrollSection";
import CourseContentSection from "./_components/CourseContentSection";
import GlobalApi from "@/app/_utils/GlobalApi";
const coursePreview = ({ params }) => {
	const [courseInfo, setCourseInfo] = useState({});
	useEffect(() => {
		console.log(params);
		params.courseId && getCourseInfoById(params.courseId);
	}, [params]);

	// Get Course Info by slug id
	const getCourseInfoById = (id) => {
		GlobalApi.getCourseById(id).then((res) => {
			setCourseInfo(res.courses_[0]);
		});
	};

	return (
		courseInfo && (
			<>
				<div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5 ">
					{/* Video Title, Description  */}
					<div className="col-span-3 bg-white p-3 rounded-lg">
						<CourseVideoDescription courseInfo={courseInfo} />
					</div>

					{/* Course Content */}
					<div className="col-span-3 md:col-span-1 ">
						<CourseEnrollSection />

						<CourseContentSection courseInfo={courseInfo} />
					</div>
				</div>
			</>
		)
	);
};

export default coursePreview;
