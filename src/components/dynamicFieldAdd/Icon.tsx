import React from 'react';
import { SlTrash } from 'react-icons/sl';

function IconButton({ handleOnClick }) {
	return (
		<button
			type='button'
			className='text-[#dc2626] hover:text-[#b91c1c] w-[20]'
			onClick={handleOnClick}
		>
            {/* {'Button'} */}
			<SlTrash size={22} />
		</button>
	);
}

export default IconButton;