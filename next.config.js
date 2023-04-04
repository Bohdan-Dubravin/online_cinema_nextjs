/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
	// async rewrites() {
	// 	// return [
	// 	// 	{
	// 	// 		source: '/:path*',
	// 	// 		destination: `http://localhost:4200/:path*`,
	// 	// 	},
	// 	// 	{
	// 	// 		source: '/uploads/:path*',
	// 	// 		destination: `http://localhost:4200/uploads/:path*`,
	// 	// 	},
	// 	// ]
	// },
}

module.exports = nextConfig
