import React from 'react';

interface DetailsProps extends React.ComponentPropsWithoutRef<'details'> {
  children: React.ReactNode;
  labelText: string;
  isOpen?: boolean;
}

export default function Details({
  children,
  labelText,
  isOpen = false,
  ...rest
}: DetailsProps) {
  return (
    <details {...rest} open={isOpen}>
      <summary>{labelText}</summary>

      {children}
    </details>
  );
}
