import { Form } from './components/Form';
import { Input } from './components/Input';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #d3e9fc;
`;

function App() {
	return (
		<div className="App">
			<Container>
				<Form>
					<Input label={'Card Number'} />
					<Input label={'Card Name'} />
				</Form>
			</Container>
		</div>
	);
}

export default App;
