module.exports = {
	reactStrictMode: true,
	distDir: "build", // In vercel this should be the out folder
	images: {
		loader: "imgix",
		path: "https://next-festival.imgix.net/",
	},
};
