import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainDiscover from "./MainDiscover.jsx";

describe("MainDiscover", () => {
	test("renders the h3 element", () => {
		render(
		<MemoryRouter>
			<MainDiscover />
		</MemoryRouter>
		);
		const h3Element = screen.getByText('Discover new music');
		expect(h3Element).toBeInTheDocument();
	});

	test("renders the p element", () => {
		render(
		<MemoryRouter>
			<MainDiscover />
		</MemoryRouter>
		);
		const pElement = screen.getByText('By joing you can benefit by listening to the latest albums released');
		expect(pElement).toBeInTheDocument();
	});

	test("renders the img element", () => {
		render(
		<MemoryRouter>
			<MainDiscover />
		</MemoryRouter>
		);
		const imgElement = screen.getByAltText(/Covers/i);
		expect(imgElement).toBeInTheDocument();
	});

	test("renders the img chart element", () => {
		render(
		<MemoryRouter>
			<MainDiscover />
		</MemoryRouter>
		);
		const imgElement = screen.getByAltText(/Icono microfono/i);
		expect(imgElement).toBeInTheDocument();
	});

	test("renders the img album element", () => {
		render(
		<MemoryRouter>
			<MainDiscover />
		</MemoryRouter>
		);
		const imgElement = screen.getByAltText(/Icono Albums/i);
		expect(imgElement).toBeInTheDocument();
	});

	test("renders the img more element", () => {
		render(
		<MemoryRouter>
			<MainDiscover />
		</MemoryRouter>
		);
		const imgElement = screen.getByAltText(/Icono More/i);
		expect(imgElement).toBeInTheDocument();
	});
});