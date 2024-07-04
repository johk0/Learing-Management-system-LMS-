import GlobalApi from "@/app/_utils/GlobalApi";
import { use, useEffect } from "react";
interface IProps {}
const CourseList = ({}: IProps) => {
	// fetch course list

	useEffect(() => {
		getAllCourses();
	}, []);
	const getAllCourses = () => {
		GlobalApi.getAllCourseList().then((res) => {
			console.log(res);
		});
	};
	return (
		<>
			<div className=""></div>
		</>
	);
};

export default CourseList;
