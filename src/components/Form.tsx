import styled from 'styled-components';

type Props = {
	children: React.ReactNode;
};

const FormContainer = styled.form`
	background: white;
	padding: 2rem;
	border-radius: 0.6rem;
	width: 40rem;
`;

export const Form = ({ children }: Props) => {
	return <FormContainer>{children}</FormContainer>;
};
