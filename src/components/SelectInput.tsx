import React from 'react';

export default function SelectInput({
  labelText,
  options,
  name,
  ...props
}: React.ComponentProps<'select'> & {
  labelText: string;
  options: [value: string, text: string][];
}) {
  const id = React.useId();

  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <select {...props} name={name} id={id}>
        {options.map((option) => (
          <option value={option[0]}>{option[1]}</option>
        ))}
      </select>
    </>
  );
}
