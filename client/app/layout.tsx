import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Divider } from "@nextui-org/react";
import "./style.css"

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)
			}
			>
				<div className="container" >
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<div className="relative flex flex-col h-screen">
						{/* <Navbar /><Divider/> */}
						<main >
							{children}
						</main>
						{/* <Divider/>
						<footer className="w-full flex items-center justify-center py-3 ">
							
						Copyright RohanJacob <br />
						
					</footer> */}
					</div>
				</Providers>
				</div>
			</body>
		</html>
	);
}

