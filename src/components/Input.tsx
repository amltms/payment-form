import styled from 'styled-components';

type Props = {
	label: String;
};

const FormContainer = styled.div``;

const InputBox = styled.input`
	border: 2px solid #e8e8e8;
	border-radius: 0.5rem;
	padding: 1rem;
	font-size: 1rem;
	width: 100%;
	margin-bottom: 1.5rem;
`;

const InputLabel = styled.label`
	font-family: sans-serif;
	font-weight: bold;
	display: block;
	margin-bottom: 0.4rem;
`;

export const Input = ({ label }: Props) => {
	return (
		<FormContainer>
			<InputLabel>{label}</InputLabel>
			<InputBox />
		</FormContainer>
	);
};
