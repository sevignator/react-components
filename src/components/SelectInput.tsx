import React from 'react';

interface SelectInputProps extends React.ComponentPropsWithoutRef<'select'> {
  labelText: string;
  options: [value: string, text: string][];
}

export default function SelectInput({
  labelText,
  options,
  name,
  ...rest
}: SelectInputProps) {
  const id = React.useId();

  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <select {...rest} name={name} id={id}>
        {options.map((option) => (
          <option value={option[0]}>{option[1]}</option>
        ))}
      </select>
    </>
  );
}
