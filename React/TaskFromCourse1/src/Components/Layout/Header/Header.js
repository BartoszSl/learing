import './Header.scss';
import mealsImage from '../../../Assets/meals.jpg';
import HeaderCart from './HeaderCart';

const Header = (props) => {
	return (
		<header className='header'>
			<img
				className='header--img'
				src={mealsImage}
				alt='A table full of delicious food!'
			/>
			<HeaderCart />
		</header>
	);
};
export default Header;
