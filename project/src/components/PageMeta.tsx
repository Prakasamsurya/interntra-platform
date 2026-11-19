import { useEffect } from 'react';

type PageMetaProps = {
  title: string;
  description: string;
};

export default function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [title, description]);

  return null;
}
