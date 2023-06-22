import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Discover from "./Discover";

describe("Discover", () => {
	test("renders Discover component", () => {
		render(
		<MemoryRouter>
			<Discover />
		</MemoryRouter>
		);
	screen.debug();
	});
});