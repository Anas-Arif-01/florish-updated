import type { Metadata } from 'next';
import WindowCoveringsCatalog from '@/components/WindowCoveringsCatalog';

export const metadata: Metadata = {
  title: 'Window Coverings | Flourish Interiors',
  description:
    'Explore blinds and curtains from Flourish Interiors, with window coverings for privacy, light control, and style.',
};

export default function WindowCoveringsPage() {
  return <WindowCoveringsCatalog />;
}
