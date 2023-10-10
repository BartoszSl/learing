import './Input.scss';
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
	return (
		<div className='input'>
			<label htmlFor={props.input.id}>
				{props.label}
			</label>
			<input ref={ref} {...props.input} />
		</div>
	);
});

export default Input;
