"use client";
import { RootState } from "@/app/_store/store";
import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import LogedIn from "./LogedIn";
import path from "path";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface IProps {}
const menu = [
	{
		id: 1,
		name: "All Courses",
		icon: BookOpen,
		path: "/courses",
	},
	{
		id: 2,
		name: "Membership",
		icon: BadgeIcon,
		path: "/membership",
	},
	{
		id: 3,
		name: "Be Instructor",
		icon: GraduationCap,
		path: "/be-instructor",
	},
];
const SideNav = ({}: IProps) => {
	const data = useSelector((state: RootState) => state.generalData[0]);

	const path = usePathname();
	useEffect(() => {
		console.log(path, "path");
	}, [path]);

	const logo = data.logo;

	const handleburgerMenu = () => {
		const burgerMenu = document.querySelector(".the-menu");
		const header = document.querySelector(".header");
		if (burgerMenu) {
			burgerMenu.classList.toggle("hidden");
		}
		if (header) {
			header.classList.add("close");
		}
	};
	return (
		<>
			<div
				className="the-menu hidden p-5 bg-white shadow-sm border h-screen fixed top-0 left-0 z-40 w-64  transition-all ease-in-out duration-200 block"
				id="nav-default">
				{/* close button  */}
				<div className="flex">
					<button
						type="button"
						onClick={() => {
							handleburgerMenu();
						}}
						className="bg-white rounded-md p-2 ml-auto mb-6 inline-flex items-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
						<span className="sr-only">Close menu</span>

						<svg
							className="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				{/* close button  */}
				{/* menu list   */}
				<Image
					src={logo}
					className="m-auto  sm:block"
					alt="Logo"
					width={170}
					height={80}
				/>
				<hr className="mt-7 sm:block"></hr>

				{/* menu list  */}

				<div className="mt-7 justify-center">
					{menu.map((item, index) => {
						return (
							<Link href={item.path} key={item.id}>
								<div
									className={`
										group
										flex gap-3 
										justify-center 
										items-center 
										mt-1 p-3 
										text-[18px] font-medium text-gray-500 cursor-pointer 
										hover:bg-primary hover:text-white rounded-md 
										transition-all ease-in-out duration-200

										${path.includes(item.path) && "bg-primary text-white"}
									 
									 `}>
									<item.icon className="group-hover:animate-bounce transition-all ease-in-out duration-200" />

									<h2>{item.name}</h2>
								</div>
							</Link>
						);
					})}
				</div>
				<hr className="mt-7 sm:block"></hr>

				<div className="p-3 flex items-center gap-4 mt-7  ">
					<LogedIn buttonSize="lg" logedIn={true} />
				</div>
			</div>
		</>
	);
};

export default SideNav;
