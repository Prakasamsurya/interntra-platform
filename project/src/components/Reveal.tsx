import { useEffect, useRef, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article' | 'span' | 'header' | 'figure';
};

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const directionClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : '';
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${directionClass} ${className}`}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
