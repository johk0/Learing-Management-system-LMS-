import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";
import Link from "next/link";

interface IProps {}

const CourseList: React.FC<IProps> = ({}: IProps) => {
	// fetch course list
	const [courseList, setCourseList] = useState<any[]>([]);

	useEffect(() => {
		getAllCourses();
	}, []);

	const getAllCourses = () => {
		GlobalApi.getAllCourseList().then((res: any) => {
			setCourseList(res["courses_"]);
			// setCourseList(res?.courseLists);
			console.log(res["courses_"]);
		});
	};

	return (
		<>
			<div className="p-5 mt-5 bg-white rounded-lg">
				{/* title & filter */}
				<div className="flex items-center justify-between">
					<h2 className="text-[20px] font-bold text-primary">All Courses</h2>
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Filter" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="All">All</SelectItem>
							<SelectItem value="Paid">Paid</SelectItem>
							<SelectItem value="Free">Free</SelectItem>
						</SelectContent>
					</Select>
				</div>

				{/* Display Course List */}
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
					{courseList.length > 0
						? courseList.map((item: any, index) => {
								const hi = "h";
								return (
									<Link
										href={`/courses/course-preview/${item.slug}`}
										key={index}>
										<div key={index}>
											<CourseItem course={item} />
										</div>
									</Link>
								);
						  })
						: [1, 2, 3, 4, 5, 6].map((item, index) => {
								return (
									<div
										key={index}
										className="w-full h-[240px] rounded-xl bg-slate-200 animate-pulse"></div>
								);
						  })}
				</div>
			</div>
		</>
	);
};

export default CourseList;
