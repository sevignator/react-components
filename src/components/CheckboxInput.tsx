import React from 'react';

export default function CheckboxInput({
  name,
  value,
  labelText,
  labelPosition = 'after',
  ...props
}: React.ComponentProps<'input'> & {
  labelText: string;
  labelPosition?: 'before' | 'after';
}) {
  const id = React.useId();

  return (
    <label htmlFor={id}>
      {labelPosition === 'before' ? labelText : ''}

      <input {...props} type='checkbox' name={name} value={value} id={id} />

      {labelPosition === 'after' ? labelText : ''}
    </label>
  );
}
