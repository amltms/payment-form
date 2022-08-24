import styled from 'styled-components';

type Props = {
	placeholder: string;
	children: React.ReactNode;
};

const InputSelect = styled.select`
	border: 2px solid #e8e8e8;
	border-radius: 0.5rem;
	padding: 1rem;
	font-size: 1rem;
	margin-bottom: 1.5rem;
	font-weight: bold;
	height: fit-content;
	width: 48%;
	appearance: none;
	background: url('https://i.ibb.co/bzWmQ01/down-arrow.png') no-repeat 90% center;
	background-size: 14px;
	color: #1f3c67;
`;

export const SelectInput = ({ placeholder, children }: Props) => {
	return (
		<InputSelect defaultValue={placeholder}>
			<option disabled>{placeholder}</option>
			{children}
		</InputSelect>
	);
};
