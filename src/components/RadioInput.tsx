import React from 'react';

interface RadioInputProps extends React.ComponentPropsWithoutRef<'input'> {
  labelText: string;
  labelPosition?: 'before' | 'after';
}

function RadioInput(
  { name, value, labelText, labelPosition = 'after', ...rest }: RadioInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const id = React.useId();

  return (
    <label htmlFor={id}>
      {labelPosition === 'before' ? labelText : ''}

      <input
        ref={ref}
        {...rest}
        type='radio'
        name={name}
        value={value}
        id={id}
      />

      {labelPosition === 'after' ? labelText : ''}
    </label>
  );
}

export default React.forwardRef(RadioInput);
