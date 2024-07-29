import { Lock, Plane, Play } from "lucide-react";
import { useState } from "react";

const CourseContentSection = ({ courseInfo }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<>
			<div className="p-3 bg-white rounded-lg" style={{ marginTop: ".75rem" }}>
				<h2 className="font-semibold">Contents</h2>
				{courseInfo &&
					courseInfo.chapters?.map((chapter, index) => {
						return (
							<div key={index} className="">
								<h2
									style={{ fontSize: "14px", margin: ".5rem" }}
									className={`p-3 flex justify-between items-center border px-4 cursor-pointer hover:bg-gray-100

											${
												activeIndex === index
													? "bg-primary rounded-md text-white hover:text-black"
													: "rounded-sm "
											}
									 `}>
									{/*  */}
									{index + 1}. {chapter.title}
									{/*  */}
									{activeIndex === index ? (
										<Play size={20} />
									) : (
										<Lock size={20} />
									)}
								</h2>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default CourseContentSection;
