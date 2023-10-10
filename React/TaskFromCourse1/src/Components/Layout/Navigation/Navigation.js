import './Navigation.scss';
import NavigationCartButton from './NavigationCartButton';

const Navigation = (props) => {
	return (
		<nav className='nav'>
			<h1 className='nav--title'>ReactMeals</h1>
			<NavigationCartButton />
		</nav>
	);
};

export default Navigation;
