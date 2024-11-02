import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
	title: "Faindor",
	description:
		"Faindor is a free and open-source social media platform to share everything with the people in your organization.",
	icons: {
		icon: "/faindor-logo-rounded.png",
	},
	keywords:
		"social media, social network, social-platform, organization, enterprise, business, open source, free",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
