import { RootState } from "@/app/_store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

interface IProps {}
const WellcomeBanner = ({}: IProps) => {
	const data = useSelector((state: RootState) => state.generalData[0]);

	const { logo, banner, name, bio } = data;

	return (
		<>
			<div className="flex flex-col gap-5 itmes-center bg-white rounded-xl p-5 text-center md:text-left">
				<div className="flex  md:gap-10 flex-col md:flex-row items-center flex-wrap">
					<Image
						className="mb-5 md:mb-0 mx-auto md:mx-0"
						src={logo}
						alt="logo"
						width={200}
						height={200}
					/>

					<h2 className="font-bold text-[29px]">
						Wellcome to{" "}
						<span className="text-primary ml-5 block sm:ml-0">{name}</span>
					</h2>
				</div>
				<div>
					<h2 className="text-gray-500">{bio}</h2>
				</div>
			</div>
		</>
	);
};

export default WellcomeBanner;
