import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Form from "./Form.jsx";

describe("Form", () => {
	test("renders the labels elements", () => {
		render(
		<MemoryRouter>
			<Form />
		</MemoryRouter>
		);
		const labelNameElement = screen.getByText(/Name/i);
		const labelEmailElement = screen.getByText(/E-mail/i);
		const labelPasswordElement = screen.getByText(/Password/i);
		expect(labelNameElement).toBeInTheDocument();
		expect(labelEmailElement).toBeInTheDocument();
		expect(labelPasswordElement).toBeInTheDocument();
	});

	test("renders the button element", () => {
		render(
		<MemoryRouter>
			<Form />
		</MemoryRouter>
		);
		const buttonElement = screen.getByText(/Join Now/i);
		expect(buttonElement).toBeInTheDocument();
	});
});