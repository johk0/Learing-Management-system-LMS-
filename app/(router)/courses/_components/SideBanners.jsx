import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import { useEffect, useState } from "react";

const SideBanners = () => {
	//
	const [sideBannerList, setSideBannerList] = useState([]);
	console.log(sideBannerList);

	useEffect(() => {
		getSideBanners();
	}, []);

	const getSideBanners = () => {
		GlobalApi.getSideBanners().then((res) => {
			console.log(res);
			setSideBannerList(res.sideBanners);
		});
	};

	return (
		<>
			<div className="flex justify-center flex-col gap-3 items-center">
				{sideBannerList &&
					sideBannerList.map((item, index) => {
						return (
							<div key={index} className="bg-white p-3 rounded-xl">
								<Image
									className="rounded-lg cursor-pointer"
									src={item.banner.url}
									onClick={() => window.open(item.url, "_blank")}
									alt="banner"
									width={500}
									height={300}
								/>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default SideBanners;
