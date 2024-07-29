import React from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";
const CourseVideoDescription = ({ courseInfo }) => {
	const videoUrl = courseInfo?.chapters?.[0]?.video?.url;
	return (
		<>
			<div>
				<h2 className="text-[20px] font-semibold ">{courseInfo.name}</h2>
				<h2
					className="text-gray-500 text-[15px] "
					style={{ marginBottom: ".75rem" }}>
					{courseInfo.author}
				</h2>

				{/* Video Player  */}
				{videoUrl && <VideoPlayer videoUrl={videoUrl} />}

				{/* Description  */}

				<h2 className="mt-5 text-[17px] font-semibold">About This Course</h2>

				<div
					style={{
						marginTop: ".75rem",
						fontSize: "12px",
						lineHeight: "1.5rem",
					}}>
					<Markdown>{courseInfo.description}</Markdown>
				</div>
			</div>
		</>
	);
};

export default CourseVideoDescription;
