import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Footer", () => {
	test("renders the links", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);
		const aboutUsLink = screen.getByText("About Us");
		const contactLink = screen.getByText("Contact");
		expect(aboutUsLink).toBeInTheDocument();
		expect(contactLink).toBeInTheDocument();
	});

	test("renders the social media icons", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);
		const facebookIcon = screen.getByAltText("Facebook icon");
		const twitterIcon = screen.getByAltText("Twitter icon");
		expect(facebookIcon).toBeInTheDocument();
		expect(twitterIcon).toBeInTheDocument();
	});
});