import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Join from "./Join";

describe("Join", () => {
	test("renders Join component", () => {
		render(
		<MemoryRouter>
			<Join />
		</MemoryRouter>
		);
	screen.debug();
	});
});