import { gql, request } from "graphql-request";
const MASTER_URL =
	"https://api-eu-west-2.hygraph.com/v2/" +
	process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
	"/master";

const getAllCourseList = async () => {
	const query = gql`
		query course {
			courses_ {
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
			}
		}
	`;
	const result = await request(MASTER_URL, query);
	return result;
};

export default {
	getAllCourseList,
};
