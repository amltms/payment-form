import { render, screen } from '@testing-library/react';
import { Form } from '../components/Form';
import { TextInput } from '../components/TextInput';

it('renders a label for text inputs', () => {
	render(<TextInput label={'test'} type={'number'} />);
	const labelElement = screen.getByText(/test/i);
	expect(labelElement).toBeInTheDocument();
});

// renders input fields for card number, name, expiration date, and cvv
it('renders input fields for card number, name, expiration date, and cvv', () => {
	render(<Form />);
	const labelElement = screen.getByText(/Card Number/i);
	expect(labelElement).toBeInTheDocument();
	const labelElement2 = screen.getByText(/Card Name/i);
	expect(labelElement2).toBeInTheDocument();
	const labelElement3 = screen.getByText(/Expiration Date/i);
	expect(labelElement3).toBeInTheDocument();
	const labelElement4 = screen.getByText(/CVV/i);
	expect(labelElement4).toBeInTheDocument();
});
