import React from 'react';

type ValidLabelTags = keyof JSX.IntrinsicElements;

interface AccordionProps {
  children: React.ReactNode;
  labelText: string;
  labelTag?: ValidLabelTags;
  isLandmark?: boolean;
}

export default function Accordion({
  children,
  labelText,
  labelTag = 'p',
  isLandmark = false,
}: AccordionProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const labelId = `accordion-${React.useId()}`;
  const WrapperTag = isLandmark ? 'section' : 'div';
  const LabelTag = labelTag;

  React.useEffect(() => {
    if (!wrapperRef.current) return;

    const items = wrapperRef.current.querySelectorAll('details');

    function handleTriggerClick(e: MouseEvent) {
      if (e.currentTarget === null) return;

      items.forEach((item) => {
        if (e.currentTarget !== item) {
          item.removeAttribute('open');
        }
      });
    }

    items.forEach((item) => {
      console.log(item);
      item.addEventListener('click', handleTriggerClick);
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener('click', handleTriggerClick);
      });
    };
  }, []);

  return (
    <WrapperTag ref={wrapperRef} aria-labelledby={labelId}>
      <LabelTag id={labelId}>{labelText}</LabelTag>
      {children}
    </WrapperTag>
  );
}
