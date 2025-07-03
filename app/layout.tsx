import './globals.css';
import type { Metadata } from 'next';
import { Jura } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

const jura = Jura({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL("https://faizanraza.vercel.app/"),
	title: {
		default: "Faizan Raza",
		template: "%s | Faizan Raza",
	},
	description:
		"Frontend developer from India. Building scalable web apps",
	openGraph: {
		title: "Faizan Raza",
		description:
			"Frontend developer from India. Building scalable web apps",
		url: "https://faizanraza.vercel.app/",
		siteName: "Faizan Raza's Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/banner/banner.png",
				width: 500,
				height: 400,
				alt: "Faizan Raza Frontend Developer",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: "Faizan Raza",
		description: "Frontend developer from India. Building scalable web apps",
		creator: "@__faizanr__",
		images: ["/banner/banner.png"],
	},
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon/favicon-light-96x96.png",
				href: "/favicon/favicon-light-96x96.png",
				sizes: "96x96",
				type: "image/png",
				rel: "icon",
			},
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon/favicon-light.svg",
				type: "image/svg+xml",
				rel: "icon",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon/favicon-96x96.png",
				href: "/favicon/favicon-96x96.png",
				sizes: "96x96",
				type: "image/png",
				rel: "icon",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon/favicon.svg",
				type: "image/svg+xml",
				rel: "icon",
			},
		],
		shortcut: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon/favicon-light-180x180.ico",
				href: "/favicon/favicon-light-180x180.ico",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon/favicon-180x180.ico",
				href: "/favicon/favicon-180x180.ico",
			},
		],
		apple: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon/favicon-light-180.png",
				href: "/favicon/favicon-light-180.png",
				sizes: "180x180",
				type: "image/png",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon/favicon-180x180.png",
				href: "/favicon/favicon-180x180.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
	},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jura.className}>
      {children}
      <Analytics />
      </body>
    </html>
  );
}
