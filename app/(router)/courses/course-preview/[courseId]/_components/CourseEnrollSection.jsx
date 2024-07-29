import { Button } from "@/components/ui/button";

const CourseEnrollSection = () => {
	let membership = false;
	return (
		<>
			<div className="p-3 text-center bg-primary rounded-lg ">
				{/* the user has membership and already login */}
				{membership ? (
					<div className="flex flex-col gap-3">
						<h2 className="font-bold text-white" style={{ fontSize: "22px" }}>
							Enroll to the course
						</h2>
						<h2 className="text-white font-light">
							Enroll Now to start learning and achive your goals!
						</h2>
						<Button className="bg-white text-primary hover:bg-primary hover:text-white border border-white">
							Enroll now
						</Button>
					</div>
				) : (
					// the user doesn't have membership
					<div className="text-white flex flex-col gap-3">
						<h2 className="font-bold text-white" style={{ fontSize: "22px" }}>
							Enroll to the course
						</h2>
						<h2>Get monthly membership and get access to all courses</h2>
						<Button className="bg-white text-primary hover:bg-primary hover:text-white border border-white">
							Get Now
						</Button>
					</div>
				)}
			</div>
		</>
	);
};

export default CourseEnrollSection;
