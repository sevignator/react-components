import React from 'react';

interface RadioInputProps extends React.ComponentPropsWithoutRef<'input'> {
  labelText: string;
  labelPosition?: 'before' | 'after';
}

export default function RadioInput({
  name,
  value,
  labelText,
  labelPosition = 'after',
  ...rest
}: RadioInputProps) {
  const id = React.useId();

  return (
    <label htmlFor={id}>
      {labelPosition === 'before' ? labelText : ''}

      <input {...rest} type='radio' name={name} value={value} id={id} />

      {labelPosition === 'after' ? labelText : ''}
    </label>
  );
}
