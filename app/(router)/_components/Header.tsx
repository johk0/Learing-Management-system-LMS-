import { Button } from "@/components/ui/button";
import { BellDot, Search } from "lucide-react";
import "../_components/header.css";
import LogedIn from "./LogedIn";
interface IProps {}
const Header = ({}: IProps) => {
	const handleTheMenu = () => {
		const theMenu = document.querySelector(".the-menu");
		const header = document.querySelector(".header");
		if (theMenu) {
			theMenu.classList.toggle("hidden");
		}
		if (header) {
			header.classList.toggle("close");
		}
	};

	return (
		<>
			<div className="p-4  bg-white flex sm:justify-between">
				{/* Hamburger menu */}
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					onClick={() => {
						handleTheMenu();
					}}
					aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				{/* Hamburger menu */}
				{/* Search bar */}
				<div className="flex gap-3 border rounded-md p-2 ml-3">
					<Search className="h-5 w-5" />
					<input type="text" placeholder="Search..." className="outline-none" />
				</div>
				{/* Search bar */}

				<div className="sm:flex hidden items-center gap-4 ml-3">
					<LogedIn logedIn={false} />
				</div>
			</div>
		</>
	);
};

export default Header;
