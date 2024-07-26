import React, { useState } from 'react';
import Button from './Button';
import SingleRow from './NewEntity';

function DynamicForm() {
	const template = { name: '', email: '', phone: '' };
	const [users, setUsers] = useState([template]);

	const addRow = () => {
		setUsers([...users, template]);
	};

	const handleChange = (e: { target: { name: any; value: any; }; }, index: number) => {
		const { name, value } = e.target;
		const updatedUser = [...users];

		updatedUser[index][name] = value;
		setUsers(updatedUser);
	};

	const handleDelete = (index) => {
		if (users.length == 1) return;

		const filteredUsers = [...users];
		filteredUsers.splice(index, 1);

		setUsers(filteredUsers);
	};

	const handleSubmit = () => {
		alert('Form submitted!');
		console.log(users);
	};

	return (
		<React.Fragment>
			<form className=' bg-white px-6 py-8  flex flex-col  rounded-md'>
				
                <div className='flex gap-6 justify-around my-2 flex-col md:flex-row '>
                    <h1 className='text-xl text-center font-semibold font-mono text-cyan-500'>Name</h1>
                    <h1 className='text-xl text-center font-semibold font-mono text-cyan-500'>Email</h1>
                    <h1 className='text-xl text-center font-semibold font-mono text-cyan-500'>Phone</h1>
                    {/* <h1 className='text-xl text-center font-semibold font-mono text-cyan-500 justify-end'>Action</h1> */}
                </div>
				{users?.map((user, index) => (
					<SingleRow
						key={index}
						index={index}
						user={user}
						handleOnChange={handleChange}
						handleOnDelete={handleDelete}
					/>
				))}
				<div className='mt-14 ml-1 p-4 gap-6'>
					<Button title='Add Row' handleOnClick={addRow} />
					<Button
						className='ml-4 bg-green-600'
						title='Submit'
						handleOnClick={handleSubmit}
					/>
				</div>
			</form>
		</React.Fragment>
	);
}

export default DynamicForm;