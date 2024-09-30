import React from 'react';

export default function CheckboxInput({
  name,
  labelPosition = 'after',
  ...props
}: React.ComponentProps<'input'> & {
  labelPosition: 'before' | 'after';
}) {
  const id = React.useId();

  return (
    <label>
      {labelPosition === 'before' && labelPosition}

      <input {...props} type='checkbox' name={name} id={id} />

      {labelPosition === 'after' && labelPosition}
    </label>
  );
}
