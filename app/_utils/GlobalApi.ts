import { gql, request } from "graphql-request";
import { get } from "http";
const MASTER_URL =
	"https://api-eu-west-2.hygraph.com/v2/" +
	process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
	"/master";

const getAllCourseList = async () => {
	const query = gql`
		query course {
			courses_(first: 10, orderBy: createdAt_DESC) {
				id
				name
				price
				author
				chapters {
					id
					title
					video {
						url
					}
					shortDesc
					chapterNumber
				}
				free
				courseLevel
				description
				tags
				time
				totalChapters
				banner {
					url
				}
				slug
			}
		}
	`;
	const result = await request(MASTER_URL, query);
	return result;
};

const getSideBanners = async () => {
	const query = gql`
		query GetSideBanner {
			sideBanners {
				url
				name
				id
				banner {
					url
					id
				}
			}
		}
	`;
	const result = await request(MASTER_URL, query);
	return result;
};

const getCourseById = async (id: string) => {
	const query = gql`
		query course {
			courses_(where: { slug: "${id}" }) {
				id
				name
				price
				author
				chapters {
					id
					title
					video {
						url
					}
					shortDesc
					chapterNumber
				}
				free
				courseLevel
				description
				tags
				time
				totalChapters
				banner {
					url
				}
			}
		}
	`;
	const result = await request(MASTER_URL, query);
	return result;
};

export default {
	getAllCourseList,
	getSideBanners,
	getCourseById,
};
