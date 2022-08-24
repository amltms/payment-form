import styled from 'styled-components';

type Props = {
	name: String;
};

const Btn = styled.button`
	width: 100%;
	border: none;
	padding: 1rem;
	font-size: 1.4rem;
	background: #0055d4;
	color: white;
	border-radius: 0.5rem;
	margin-top: 1rem;
	box-shadow: 0px 10px 35px -3px rgba(0, 85, 212, 0.5);
`;

export const Button = ({ name }: Props) => {
	return <Btn>{name}</Btn>;
};
