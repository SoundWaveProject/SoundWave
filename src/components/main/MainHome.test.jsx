import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainHome from "./MainHome.jsx";

describe("MainHome", () => {
	test('renders the h1 element', () => {
		render(
		<MemoryRouter>
			<MainHome />
		</MemoryRouter>
		);
		const h1Element = screen.getByText(/Feel The Music/i);
		expect(h1Element).toBeInTheDocument();
	});

	test('renders the h4 element', () => {
		render(
		<MemoryRouter>
			<MainHome />
		</MemoryRouter>
		);
		const h4Element = screen.getByText(/Stream over 20 thousand songs with one click/i);
		expect(h4Element).toBeInTheDocument();
	});

	test('renders the button element', () => {
		render(
		<MemoryRouter>
			<MainHome />
		</MemoryRouter>
		);
		const buttonElement = screen.getByText(/Join Now/i);
		expect(buttonElement).toBeInTheDocument();
	});

	test('renders the img element', () => {
		render(
		<MemoryRouter>
			<MainHome />
		</MemoryRouter>
		);
		const imgElement = screen.getByAltText(/imagen principal, mujer de perfil/i);
		expect(imgElement).toBeInTheDocument();
	});
});