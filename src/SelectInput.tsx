import React from 'react';

export default function SelectInput({
  options,
  name,
  ...props
}: React.ComponentProps<'select'> & {
  options: [value: string, text: string][];
}) {
  const id = React.useId();

  return (
    <select {...props} name={name} id={id}>
      {options.map((option) => (
        <option value={option[0]}>{option[1]}</option>
      ))}
    </select>
  );
}
