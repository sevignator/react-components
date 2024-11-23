import React from 'react';

interface SelectInputProps extends React.ComponentPropsWithoutRef<'select'> {
  labelText: string;
  options: [value: string, text: string][];
}

function SelectInput(
  { labelText, options, name, ...rest }: SelectInputProps,
  ref: React.ForwardedRef<HTMLSelectElement>
) {
  const id = React.useId();

  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <select ref={ref} {...rest} name={name} id={id}>
        {options.map((option) => (
          <option value={option[0]}>{option[1]}</option>
        ))}
      </select>
    </>
  );
}

export default React.forwardRef(SelectInput);
