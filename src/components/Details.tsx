import React from 'react';

interface DetailsProps extends React.ComponentPropsWithoutRef<'details'> {
  children: React.ReactNode;
  labelText: string;
  isOpen?: boolean;
}

function Details(
  { children, labelText, isOpen = false, ...rest }: DetailsProps,
  ref: React.ForwardedRef<HTMLDetailsElement>
) {
  return (
    <details ref={ref} {...rest} open={isOpen}>
      <summary>{labelText}</summary>

      {children}
    </details>
  );
}

export default React.forwardRef(Details);
