import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
	"productSlice/fetchData",
	async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		const data = response.json();
		return data;
	}
);

const generalDataSlice = createSlice({
	name: "generalData",
	initialState: [
		{
			name: "Concept Academy",
			logo: "https://codewithsadee.github.io/eduweb/assets/images/logo.svg",
			banner: "https://codewithsadee.github.io/eduweb/assets/images/logo.svg",
			bio: "Concept Academy is a leading online learning platform that helps anyone learn business, software, technology, and creative skills to achieve personal and professional goals.",
			description:
				"Concept Academy is a leading online learning platform that helps anyone learn business, software, technology, and creative skills to achieve personal and professional goals. Through individual, corporate, academic and government subscriptions, members have access to the Concept Academy video library of engaging, top-quality courses taught by recognized industry experts.",
			color: {
				// hue: 222.2,
				// saturation: "84%",
				// lightness: "4.9%",
				hue: 170,
				saturation: "75%",
				lightness: "41%",
			},
		},
	],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchData.pending, (state, action) => {
			// loader here
		});
		builder.addCase(fetchData.fulfilled, (state, action) => {
			console.log(action);
			// state = action.payload;
			// state.push(...action.payload); // add a twice time
			return action.payload;
		});
	},
});
export default generalDataSlice.reducer;
