import React from 'react';

interface CheckboxInputProps extends React.ComponentPropsWithoutRef<'input'> {
  labelText: string;
  labelPosition?: 'before' | 'after';
}

export default function CheckboxInput({
  labelText,
  labelPosition = 'after',
  ...rest
}: CheckboxInputProps) {
  const id = React.useId();

  return (
    <label htmlFor={id}>
      {labelPosition === 'before' ? labelText : ''}

      <input {...rest} type='checkbox' id={id} />

      {labelPosition === 'after' ? labelText : ''}
    </label>
  );
}
