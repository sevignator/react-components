import React from 'react';

interface CheckboxInputProps extends React.ComponentPropsWithoutRef<'input'> {
  labelText: string;
  labelPosition?: 'before' | 'after';
}

function CheckboxInput(
  { labelText, labelPosition = 'after', ...rest }: CheckboxInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const id = React.useId();

  return (
    <label htmlFor={id}>
      {labelPosition === 'before' ? labelText : ''}

      <input ref={ref} {...rest} type='checkbox' id={id} />

      {labelPosition === 'after' ? labelText : ''}
    </label>
  );
}

export default React.forwardRef(CheckboxInput);
