import Image from "next/image";
import "./course.css";
const CourseItem = ({ course }) => {
	return (
		<div className=" border rounded-xl  cursor-pointer hover:shadow-2xl transition-all duration-300">
			<Image
				src={course?.banner?.url}
				width={500}
				height={150}
				alt="banner"
				className="rounded-lg p-2 object-fill"
				style={{ borderRadius: "16px" }}
			/>

			<div className="flex flex-col gap-1 p-2">
				<h2 className="font-medium">{course.name}</h2>
				<h2 className="text-[12px] text-gray-400">
					{course.author || "Admin"}
				</h2>
				{
					<div className="flex gap-3">
						<Image src={"/chapter.png"} alt="play" width={25} height={20} />
						<h2> {course.chapters.length || 0} Chapters </h2>
					</div>
				}

				<h2 className="font-medium text-[15px]">
					{course?.free ? "Free" : "Paid"}
				</h2>
			</div>
		</div>
	);
};

export default CourseItem;
