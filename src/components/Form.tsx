import styled from 'styled-components';
import { Button } from './Button';
import { SelectInput } from './SelectInput';
import { InputLabel, TextInput } from './TextInput';

const FormContainer = styled.form`
	background: white;
	padding: 2rem;
	border-radius: 0.6rem;
	width: 40rem;
	box-shadow: 0px 10px 35px -3px rgba(0, 0, 0, 0.2);
	position: relative;
	padding-top: 15rem;
`;

const Row = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: stretch;
`;

const Expiry = styled.div`
	flex: auto;
	margin-right: 40px;
`;

const SelectContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Card = styled.img`
	position: absolute;
	top: -25%;
	left: 50%;
	width: 80%;
	transform: translateX(-50%);
	border-radius: 1rem;
	box-shadow: 0px 35px 35px -3px rgba(0, 0, 0, 0.4);
`;

export const Form = () => {
	const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	const years = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];

	const mapToOptions = (options: string[]) => {
		return options.map((option) => (
			<option key={option} value={option}>
				{option}
			</option>
		));
	};

	return (
		<FormContainer>
			<Card src="./card.png" alt="visa card" />
			<TextInput label={'Card Number'} />
			<TextInput label={'Card Name'} />
			<Row>
				<Expiry>
					<InputLabel>Expiration Date</InputLabel>
					<SelectContainer>
						<SelectInput placeholder={'Month'}>{mapToOptions(months)}</SelectInput>
						<SelectInput placeholder={'Year'}>{mapToOptions(years)}</SelectInput>
					</SelectContainer>
				</Expiry>
				<TextInput label={'CVV'} />
			</Row>
			<Button name={'Submit'} />
		</FormContainer>
	);
};
