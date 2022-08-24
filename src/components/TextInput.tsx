import { HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

type Props = {
	label: String;
	type: HTMLInputTypeAttribute;
};

const Input = styled.input`
	border: 2px solid #e8e8e8;
	border-radius: 0.5rem;
	padding: 1rem;
	font-size: 1rem;
	width: 100%;
	margin-bottom: 1.5rem;
`;

export const InputLabel = styled.label`
	font-family: sans-serif;
	font-weight: bold;
	display: block;
	font-size: 0.9rem;
	margin-bottom: 0.4rem;
	color: #1f3c67;
`;

export const TextInput = ({ label, type }: Props) => {
	return (
		<div>
			<InputLabel>{label}</InputLabel>
			<Input type={type} />
		</div>
	);
};
