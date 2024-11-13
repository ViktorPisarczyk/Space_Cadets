import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
	return (
		<React.Fragment>
			<Header />
			<main className="flex flex-col align-center w-full justify-center">
				<Outlet />
			</main>
			<Footer />
		</React.Fragment>
	);
}
