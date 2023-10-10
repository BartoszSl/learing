import MealForm from './MealForm';
import './MealItem.scss';

const MealItem = (props) => {
	const price = `$${props.price.toFixed(2)}`;

	const addToCartHandler = (amount) => {
		console.log(amount);
		console.log(props.id);
	};

	return (
		<li className='mealItem'>
			<div>
				<h3>{props.name}</h3>
				<div className='mealItem--description'>{props.description}</div>
				<div className='mealItem--price'>{price}</div>
			</div>
			<div>
				<MealForm id={props.id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
