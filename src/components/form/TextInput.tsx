import React from 'react';

type TextInputProps = {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  value,
  onChange,
  disabled = false,
  error,
}) => (
  <div className="my-1 px-4 grid grid-cols-2 gap-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type="text"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
        error ? 'border-red-500' : ''
      }`}
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export default TextInput;
