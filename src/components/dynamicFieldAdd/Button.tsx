import React from 'react';

function Button({ title, handleOnClick, className = '' }) {
	return (
		<button
			type='button'
			className={'bg-blue-600 text-white p-2 rounded-md text-sm ' + className}
			onClick={handleOnClick}
		>
			{title}
		</button>
	);
}

export default Button;