import React from 'react';
import InputField from './InputField';
import IconButton from './Icon';

function SingleRow({ index, user, handleOnChange, handleOnDelete }) {
	return (
		<div className='flex gap-6 justify-between my-2 flex-col md:flex-row'>
			<InputField
				name='name'
				placeholder='Name'
				value={user.name}
				handleOnChange={(e) => handleOnChange(e, index)}
			/>
			<InputField
				name='email'
				type='email'
				placeholder='Email'
				value={user.email}
				handleOnChange={(e) => handleOnChange(e, index)}
			/>
			<InputField
				name='phone'
				placeholder='Phone'
				value={user.phone}
				handleOnChange={(e) => handleOnChange(e, index)}
			/>
			<IconButton handleOnClick={() => handleOnDelete(index)} />
		</div>
	);
}

export default SingleRow;