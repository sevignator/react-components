import React from 'react';

interface DetailsProps {
  children: React.ReactNode;
  labelText: string;
  isOpen?: boolean;
}

export default function Details({
  children,
  labelText,
  isOpen = false,
}: DetailsProps) {
  return (
    <details open={isOpen}>
      <summary>{labelText}</summary>

      {children}
    </details>
  );
}
