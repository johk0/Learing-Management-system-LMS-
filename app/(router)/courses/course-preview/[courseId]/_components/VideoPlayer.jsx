import React from "react";

const VideoPlayer = ({ videoUrl }) => {
	console.log(videoUrl);
	return (
		<div key={videoUrl}>
			<video width={1000} height={250} controls className="rounded-lg">
				<source src={videoUrl} type="video/mp4" />
				<p>
					Your browser does not support the video tag. Please update your
					browser.
				</p>
			</video>
		</div>
	);
};

export default VideoPlayer;
