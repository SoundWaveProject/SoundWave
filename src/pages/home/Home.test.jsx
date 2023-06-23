import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home", () => {
	test("renders Home component", () => {
		render(
		<MemoryRouter>
			<Home />
		</MemoryRouter>
		);
	screen.debug();
	});
});