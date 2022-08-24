import { Form } from './components/Form';
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
				<Form />
			</Container>
		</div>
	);
}

export default App;
