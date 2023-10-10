import './NavigationCartButton.scss';

const NavigationCartButton = () => {
	return (
		<button className='nav--orders'>
			<p className='nav--orders__text'>
				<i className='fa-solid fa-cart-shopping'></i>
				<span>Your Cart</span>
			</p>
			<div className='nav--orders__badge'>0</div>
		</button>
	);
};

export default NavigationCartButton;
