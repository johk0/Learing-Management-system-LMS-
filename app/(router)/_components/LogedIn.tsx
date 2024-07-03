import { Button } from "@/components/ui/button";
import { BellDot } from "lucide-react";

interface IProps {
	logedIn: boolean;
	buttonSize?: "default" | "sm" | "lg" | "icon";
}
const LogedIn = ({ logedIn, buttonSize }: IProps) => {
	if (!logedIn) {
		return (
			<>
				<BellDot className="cursor-pointer" />
				<Button size={buttonSize}>Get Started</Button>
			</>
		);
	} else {
		return (
			<>
				<BellDot className="cursor-pointer" />
				<Button size={buttonSize} variant={"destructive"}>
					Log out
				</Button>
			</>
		);
	}
};

export default LogedIn;
