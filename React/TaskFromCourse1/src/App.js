import { Fragment } from 'react';
import Navigation from './Components/Layout/Navigation/Navigation';
import Header from './Components/Layout/Header/Header';
import Meals from './Components/Meals/Meals';

function App() {
	return (
		<Fragment>
			<Navigation />
			<Header />
			<Meals />
		</Fragment>
	);
}

export default App;
