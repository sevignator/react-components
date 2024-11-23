import React from 'react';

type ValidLabelTags = keyof JSX.IntrinsicElements;

interface GroupAccordionProps extends React.ComponentPropsWithoutRef<'div'> {
  isLandmark: false;
  children: React.ReactNode;
  labelText?: string;
  labelTag?: ValidLabelTags;
}

interface LandmarkAccordionProps
  extends React.ComponentPropsWithoutRef<'section'> {
  isLandmark: true;
  children: React.ReactNode;
  labelText?: string;
  labelTag?: ValidLabelTags;
}

type AccordionProps = GroupAccordionProps | LandmarkAccordionProps;

function Accordion({
  children,
  labelText,
  labelTag = 'p',
  isLandmark = false,
  ...rest
}: AccordionProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const labelId = React.useId();
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

  if (isLandmark) {
    return (
      <section ref={wrapperRef} {...rest} aria-labelledby={labelId}>
        {labelText && <LabelTag id={labelId}>{labelText}</LabelTag>}
        {children}
      </section>
    );
  } else {
    return (
      <div ref={wrapperRef} {...rest}>
        {labelText && <LabelTag>{labelText}</LabelTag>}
        {children}
      </div>
    );
  }
}

export default Accordion;
