import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
	test('renders the Logo component', () => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);
		const logo = screen.getByAltText('Logo Sound wave');
		const titleLogo = screen.getByText('SoundWave');
		expect(logo).toBeInTheDocument();
		expect(titleLogo).toBeInTheDocument();
	});

	test('renders the links', () => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);
		const discoverLink = screen.getByText('Discover');
		const joinLink = screen.getByText('Join');
		expect(discoverLink).toBeInTheDocument();
		expect(joinLink).toBeInTheDocument();
	});
});