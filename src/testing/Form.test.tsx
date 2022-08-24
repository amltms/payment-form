import { render, screen } from '@testing-library/react';
import { Form } from '../components/Form';

it('renders card image', () => {
	render(<Form />);
	const imageElement = screen.getByAltText(/visa card/i);
	expect(imageElement).toBeInTheDocument();
	expect(imageElement).toHaveAttribute('src', './card.png');
});

it('renders Submit Button', () => {
	render(<Form />);
	const labelElement = screen.getByText(/Submit/i);
	expect(labelElement).toBeInTheDocument();
});

it('render Month options', () => {
	render(<Form />);
	expect(screen.getByRole('option', { name: 'Month' })).toBeInTheDocument();
});

it('render Year options', () => {
	render(<Form />);
	expect(screen.getByRole('option', { name: 'Year' })).toBeInTheDocument();
});
