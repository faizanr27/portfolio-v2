import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Faizan Raza",
		short_name: "faizanraza",
		description:
			"Frontend developer from India. Building scalable web apps",
		start_url: "/",
    id: "app.faizanraza.vercel",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",

		icons: [
			{
				src: "/favicon/web-app-manifest-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/favicon/web-app-manifest-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
		],
	};
}