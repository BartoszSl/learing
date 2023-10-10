import { Fragment } from 'react';
import { ReactDOM } from 'react-dom';

const ModalOverlay = (props) => {};

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<ModalOverlay />,
				document.getElementById('overlay-root')
			)}
		</Fragment>
	);
};

export default Modal;
