import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer.jsx";

describe("Footer", () => {
	test("renders the About Us link", () => {
		render(
		<MemoryRouter>
			<Footer />
		</MemoryRouter>
		);
		const aboutUsElement = screen.getByText('About Us');
		expect(aboutUsElement).toBeInTheDocument();
	});

	test("renders the Contact Us link", () => {
		render(
		<MemoryRouter>
			<Footer />
		</MemoryRouter>
		);
		const contactUsElement = screen.getByText('Contact');
		expect(contactUsElement).toBeInTheDocument();
	});

	test("renders the Facebook and Twitter links", () => {
		render(
		<MemoryRouter>
			<Footer />
		</MemoryRouter>
		);
		const facebookElement = screen.getByText('Facebook');
		const twitterElement = screen.getByText('Twitter');
		expect(facebookElement).toBeInTheDocument();
		expect(twitterElement).toBeInTheDocument();
	});
});