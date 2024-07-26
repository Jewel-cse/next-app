import React from 'react';

function InputField({
	name,
	value,
	placeholder = '',
	type = 'text',
	handleOnChange,
}) {
	return (
		<input
			className='border-2 rounded-md px-3 py-2 text-xl outline-none border-black'
			type={type}
			name={name}
			value={value}
			placeholder={placeholder}
			onChange={handleOnChange}
		/>
	);
}

export default InputField;