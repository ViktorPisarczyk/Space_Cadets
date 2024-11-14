import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
	return (
		<React.Fragment>
			<Header />
			<main className="flex flex-col justify-between h-full">
				<Outlet />
			</main>
			<Footer />
		</React.Fragment>
	);
}
